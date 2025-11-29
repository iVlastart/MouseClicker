using System.Text;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace MouseClicker
{
    /// <summary>
    /// Interaction logic for MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public static Label LblCheeseRef = new();
        public static Label LblCPSRef = new();
        public MainWindow()
        {
            InitializeComponent();
            LblCheeseRef = lblCheese;
            LblCPSRef = lblCPS;
        }

        private void Window_Loaded(object sender, RoutedEventArgs e)
        {
            lblCheese.Content = Cheese.setCheeseLabel();
            lblCPS.Content = Cheese.setCPSLabel();
            Upgrade.loadUpgrades(stckUpgrades);
        }

        private void btnMouseClick_Click(object sender, RoutedEventArgs e)
        {
            Cheese.cheese++;
            lblCheese.Content = Cheese.setCheeseLabel();
        }
        internal static void PurchaseUpgrade(object sender, MouseEventArgs e,
                                            Label lblPrice, UInt32 Price, uint CPS)
        {
            if (Cheese.cheese < Price) return;
            Cheese.cheese -= Price;
            Cheese.CPS += (UInt16)CPS;
            LblCheeseRef.Content = Cheese.setCheeseLabel();
            LblCPSRef.Content = Cheese.setCPSLabel();
        }
    }
}