
using System;
using V82;
using V82.Перечисления;//Ссылка;
namespace V82.Перечисления//Ссылка
{
		///<summary>
		///(Упр)
		///</summary>
	public enum XYZКлассификация
	{
		ПустаяСсылка = - 1,
		XКласс = 0,//X - класс
		YКласс = 1,//Y - класс
		ZКласс = 2,//Z - класс
	}
	public static partial class XYZКлассификация_Значения//:ПеречислениеСсылка
	{
		public static readonly Guid XКласс = new Guid("3e9986a3-bd07-3a9a-4dd5-a784ff346941");//X - класс
		public static readonly Guid YКласс = new Guid("2384468c-8ece-dfef-4745-f113ee4cb7b2");//Y - класс
		public static readonly Guid ZКласс = new Guid("338f50b1-f149-3385-4f6b-fa52f66801e9");//Z - класс
		public static XYZКлассификация Получить(this XYZКлассификация Значение, byte[] Ссылка)
		{
			return Получить(Значение, new Guid(Ссылка));
		}
		public static XYZКлассификация Получить(this XYZКлассификация Значение, Guid Ссылка)
		{
			if(Ссылка == XКласс)
			{
				return XYZКлассификация.XКласс;
			}
			else if(Ссылка == YКласс)
			{
				return XYZКлассификация.YКласс;
			}
			else if(Ссылка == ZКласс)
			{
				return XYZКлассификация.ZКласс;
			}
			return XYZКлассификация.ПустаяСсылка;
		}
		public static byte[] Ключ(this XYZКлассификация Значение)
		{
			return Ссылка(Значение).ToByteArray();
		}
		public static Guid Ссылка(this XYZКлассификация Значение)
		{
			switch (Значение)
			{
				case XYZКлассификация.XКласс: return XКласс;
				case XYZКлассификация.YКласс: return YКласс;
				case XYZКлассификация.ZКласс: return ZКласс;
			}
			return Guid.Empty;
		}
	}
}