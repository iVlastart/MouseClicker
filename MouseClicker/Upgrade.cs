using System;
using System.Collections.Generic;
using System.Text;
using System.Windows.Controls;

namespace MouseClicker
{
    internal static class Upgrade
    {
        //Design for the upgrade
        /*
            <StackPanel Orientation="Horizontal" Height="40">
                <Image Source="/sprites/cheese.png"/>
                <Label Content="Cheese" FontSize="20"/>
            </StackPanel>
         */
        private record UpgradeItem(string Name, string Img, UInt128 Count,
                                UInt128 Price, UInt128 CPS);
        static List<UpgradeItem> upgrades = new()
        {
            new UpgradeItem("Cheese", "cheese", 0, 10, 5),
        };
        internal static void loadUpgrades(StackPanel stckUpgrades)
        {
            StackPanel stackPanel = new();
            Image img = new();
            Label lbl = new();
            UpgradeItem[] upgradesArr = upgrades.ToArray();
            foreach (var upgrade in upgradesArr)
            {
                img.Source = new System.Windows.Media.Imaging.BitmapImage(new Uri($"/sprites/{upgrade.Img}.png", UriKind.Relative));
                lbl.Content = upgrade.Name;
            }
        }
    }
}
