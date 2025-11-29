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
                    <Label Content="0" FontSize="10" 
                           VerticalContentAlignment="Center"/>
                    <Label Content="0" FontSize="20"/>
            </StackPanel>
         */
        internal static UInt128 CheeseCount { get; set; } = 0;
        internal static UInt128 CheesePrice { get; set; } = 10;
        internal static UInt128 CheeseCPS { get; set; } = 5;
        private record UpgradeItem(string Name, string Img, UInt128 Count,
                                UInt128 Price, UInt128 CPS);
        static List<UpgradeItem> upgrades = new()
        {
            new UpgradeItem("Cheese", "cheese", CheeseCount, CheesePrice, CheeseCPS),
        };
        internal static void loadUpgrades(StackPanel stckUpgrades)
        {
            UpgradeItem[] upgradesArr = upgrades.ToArray();
            foreach (var upgrade in upgradesArr)
            {
                StackPanel stackPanel = new StackPanel
                {
                    Orientation = System.Windows.Controls.Orientation.Horizontal,
                };
                Image img = new Image
                {
                    Source = new System.Windows.Media.Imaging.BitmapImage(new Uri($"/sprites/{upgrade.Img}.png", UriKind.Relative)),
                    Width = 32,
                    Height = 32
                };
                Label lblName = new Label
                {
                    Name = "lbl" + upgrade.Name,
                    Content = upgrade.Name,
                    FontSize = 20
                };
                Label lblPrice = new Label
                {
                    Name = "lbl" + upgrade.Name + "Price",
                    Content = upgrade.Price.ToString(),
                    FontSize = 10,
                    VerticalContentAlignment = System.Windows.VerticalAlignment.Center
                };
                Label lblCount = new Label
                {
                    Name = "lbl" + upgrade.Name + "Count",
                    Content = upgrade.Count.ToString(),
                    FontSize = 20
                };
                stackPanel.Children.Add(img);
                stackPanel.Children.Add(lblName);
                stackPanel.Children.Add(lblPrice);
                stackPanel.Children.Add(lblCount);
                stckUpgrades.Children.Add(stackPanel);
            }
        }
    }
}
