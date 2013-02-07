
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Общ)
		///</summary>
	public enum СтавкиНДС
	{
		ПустаяСсылка = - 1,
	///<summary>
	///(Общ) Ставка НДС 18%
	///</summary>
		НДС18 = 0,//18%
	///<summary>
	///(Общ) Расчетная ставка НДС 18% / 118%
	///</summary>
		НДС18_118 = 1,//18% / 118%
	///<summary>
	///(Общ) Ставка НДС 10%
	///</summary>
		НДС10 = 2,//10%
	///<summary>
	///(Общ) Расчетная ставка НДС 10% / 110%
	///</summary>
		НДС10_110 = 3,//10% / 110%
	///<summary>
	///(Общ) Ставка НДС 0%
	///</summary>
		НДС0 = 4,//0%
	///<summary>
	///(Общ)
	///</summary>
		БезНДС = 5,//Без НДС
	///<summary>
	///(Общ) Ставка НДС 20%
	///</summary>
		НДС20 = 6,//20%
	///<summary>
	///(Общ) Расчетная ставка НДС 20% / 120%
	///</summary>
		НДС20_120 = 7,//20% / 120%
	}
	public static partial class СтавкиНДС_Значения//:ПеречислениеСсылка
	{
		///<summary>
		///(Общ) Ставка НДС 18%
		///</summary>
		public static readonly Guid НДС18 = new Guid("50008596-83ba-8ec2-11d8-4680a2d43b82");//18%
		///<summary>
		///(Общ) Расчетная ставка НДС 18% / 118%
		///</summary>
		public static readonly Guid НДС18_118 = new Guid("50008596-83ba-8ec2-11d8-4680a2d43b83");//18% / 118%
		///<summary>
		///(Общ) Ставка НДС 10%
		///</summary>
		public static readonly Guid НДС10 = new Guid("b8b66d8f-a491-499d-4630-db1dd9b92c12");//10%
		///<summary>
		///(Общ) Расчетная ставка НДС 10% / 110%
		///</summary>
		public static readonly Guid НДС10_110 = new Guid("abf8cb89-0cde-a6ce-4965-6abdf86e7109");//10% / 110%
		///<summary>
		///(Общ) Ставка НДС 0%
		///</summary>
		public static readonly Guid НДС0 = new Guid("50008596-83ba-8ec2-11d8-6841836dca8b");//0%
		///<summary>
		///(Общ)
		///</summary>
		public static readonly Guid БезНДС = new Guid("f06669a1-d53a-a613-4e42-52527a2c0e90");//Без НДС
		///<summary>
		///(Общ) Ставка НДС 20%
		///</summary>
		public static readonly Guid НДС20 = new Guid("0fa5d8be-3267-eb88-400c-bbd4562b979b");//20%
		///<summary>
		///(Общ) Расчетная ставка НДС 20% / 120%
		///</summary>
		public static readonly Guid НДС20_120 = new Guid("bc8214b9-1663-9357-43b5-3e6d1f96d505");//20% / 120%
		public static СтавкиНДС Получить(this СтавкиНДС Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static СтавкиНДС Получить(this СтавкиНДС Значение, Guid Ссылка)
		{
			if(Ссылка == НДС18)
			{
				return СтавкиНДС.НДС18;
			}
			else if(Ссылка == НДС18_118)
			{
				return СтавкиНДС.НДС18_118;
			}
			else if(Ссылка == НДС10)
			{
				return СтавкиНДС.НДС10;
			}
			else if(Ссылка == НДС10_110)
			{
				return СтавкиНДС.НДС10_110;
			}
			else if(Ссылка == НДС0)
			{
				return СтавкиНДС.НДС0;
			}
			else if(Ссылка == БезНДС)
			{
				return СтавкиНДС.БезНДС;
			}
			else if(Ссылка == НДС20)
			{
				return СтавкиНДС.НДС20;
			}
			else if(Ссылка == НДС20_120)
			{
				return СтавкиНДС.НДС20_120;
			}
			return СтавкиНДС.ПустаяСсылка;
		}
		public static byte[] Ключ(this СтавкиНДС Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this СтавкиНДС Значение)
		{
			switch (Значение)
			{
				case СтавкиНДС.НДС18: return НДС18;
				case СтавкиНДС.НДС18_118: return НДС18_118;
				case СтавкиНДС.НДС10: return НДС10;
				case СтавкиНДС.НДС10_110: return НДС10_110;
				case СтавкиНДС.НДС0: return НДС0;
				case СтавкиНДС.БезНДС: return БезНДС;
				case СтавкиНДС.НДС20: return НДС20;
				case СтавкиНДС.НДС20_120: return НДС20_120;
			}
			return Guid.Empty;
		}
	}
}