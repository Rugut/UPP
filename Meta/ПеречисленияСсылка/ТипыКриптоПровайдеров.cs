
using System;
using V82;
using V82.ѕеречислени€;//—сылка;
namespace V82.ѕеречислени€//—сылка
{
	public enum “ипы риптоѕровайдеров
	{
		ѕуста€—сылка = - 1,
	///<summary>
	/// риптопровайдер  риптоѕро CSP
	///</summary>
		CryptoPro = 0,//Crypto pro
	///<summary>
	/// риптопровайдер VipNet CSP
	///</summary>
		VipNet = 1,//Vip net
	}
	public static partial class “ипы риптоѕровайдеров_«начени€//:ѕеречисление—сылка
	{
		///<summary>
		/// риптопровайдер  риптоѕро CSP
		///</summary>
		public static readonly Guid CryptoPro = new Guid("210431a0-5258-66a9-49a3-51ec5b750bc5");//Crypto pro
		///<summary>
		/// риптопровайдер VipNet CSP
		///</summary>
		public static readonly Guid VipNet = new Guid("7de12fb8-4f94-9d58-474f-7092a1a1603b");//Vip net
		public static “ипы риптоѕровайдеров ѕолучить(this “ипы риптоѕровайдеров «начение, byte[] —сылка)
		{
			return ѕолучить(«начение, new Guid(—сылка));
		}
		public static “ипы риптоѕровайдеров ѕолучить(this “ипы риптоѕровайдеров «начение, Guid —сылка)
		{
			if(—сылка == CryptoPro)
			{
				return “ипы риптоѕровайдеров.CryptoPro;
			}
			else if(—сылка == VipNet)
			{
				return “ипы риптоѕровайдеров.VipNet;
			}
			return “ипы риптоѕровайдеров.ѕуста€—сылка;
		}
		public static byte[]  люч(this “ипы риптоѕровайдеров «начение)
		{
			return —сылка(«начение).ToByteArray();
		}
		public static Guid —сылка(this “ипы риптоѕровайдеров «начение)
		{
			switch («начение)
			{
				case “ипы риптоѕровайдеров.CryptoPro: return CryptoPro;
				case “ипы риптоѕровайдеров.VipNet: return VipNet;
			}
			return Guid.Empty;
		}
	}
}
