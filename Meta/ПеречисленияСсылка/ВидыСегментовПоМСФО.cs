
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Упр)
		///</summary>
	public enum ВидыСегментовПоМСФО
	{
		ПустаяСсылка = - 1,
		Региональный = 0,
		Отраслевой = 1,
	}
	public static partial class ВидыСегментовПоМСФО_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid Региональный = new Guid("e4c89fac-9077-7941-4244-d452afb47dc8");
		public static readonly Guid Отраслевой = new Guid("840a1491-3f92-406d-4e29-5e16e3af26ab");
		public static ВидыСегментовПоМСФО Получить(this ВидыСегментовПоМСФО Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static ВидыСегментовПоМСФО Получить(this ВидыСегментовПоМСФО Значение, Guid Ссылка)
		{
			if(Ссылка == Региональный)
			{
				return ВидыСегментовПоМСФО.Региональный;
			}
			else if(Ссылка == Отраслевой)
			{
				return ВидыСегментовПоМСФО.Отраслевой;
			}
			return ВидыСегментовПоМСФО.ПустаяСсылка;
		}
		public static byte[] Ключ(this ВидыСегментовПоМСФО Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this ВидыСегментовПоМСФО Значение)
		{
			switch (Значение)
			{
				case ВидыСегментовПоМСФО.Региональный: return Региональный;
				case ВидыСегментовПоМСФО.Отраслевой: return Отраслевой;
			}
			return Guid.Empty;
		}
	}
}
