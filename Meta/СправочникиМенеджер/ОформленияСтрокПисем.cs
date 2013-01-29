
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.Справочники;//Менеджер;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.Справочники//Менеджер
{
	public partial class ОформленияСтрокПисем:СправочникМенеджер
	{

		public static СправочникиСсылка.ОформленияСтрокПисем НайтиПоКоду(decimal Код)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld3147 [Жирный]
					,_Fld3148 [Зачеркнутый]
					,_Fld3149 [Наклонный]
					,_Fld3150 [Подчеркнутый]
					,_Fld3151 [ЦветТекста]
					,_Fld3152 [ЦветФона]
					From _Reference186(NOLOCK)
					Where _Code=@Код";
					Команда.Parameters.AddWithValue("Код", Код);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ОформленияСтрокПисем();
		
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1?true:false;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1?true:false;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
							Ссылка.Жирный = ((byte[])Читалка.GetValue(6))[0]==1?true:false;
							Ссылка.Зачеркнутый = ((byte[])Читалка.GetValue(7))[0]==1?true:false;
							Ссылка.Наклонный = ((byte[])Читалка.GetValue(8))[0]==1?true:false;
							Ссылка.Подчеркнутый = ((byte[])Читалка.GetValue(9))[0]==1?true:false;
							return Ссылка;
						}
						else
						{
							return null;
						}
					}
				}
			}
		}

		public static СправочникиВыборка.ОформленияСтрокПисем Выбрать()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Select top 1000 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование],_Fld3147 [Жирный],_Fld3148 [Зачеркнутый],_Fld3149 [Наклонный],_Fld3150 [Подчеркнутый],_Fld3151 [ЦветТекста],_Fld3152 [ЦветФона]
		 From _Reference186(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ОформленияСтрокПисем();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ОформленияСтрокПисем();
		
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1?true:false;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1?true:false;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
							Ссылка.Жирный = ((byte[])Читалка.GetValue(6))[0]==1?true:false;
							Ссылка.Зачеркнутый = ((byte[])Читалка.GetValue(7))[0]==1?true:false;
							Ссылка.Наклонный = ((byte[])Читалка.GetValue(8))[0]==1?true:false;
							Ссылка.Подчеркнутый = ((byte[])Читалка.GetValue(9))[0]==1?true:false;
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}

		public static V82.СправочникиОбъект.ОформленияСтрокПисем СоздатьЭлемент()
		{
			var Объект = new V82.СправочникиОбъект.ОформленияСтрокПисем();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.ЭтоГруппа = false;
			return Объект;
		}
	}
}
