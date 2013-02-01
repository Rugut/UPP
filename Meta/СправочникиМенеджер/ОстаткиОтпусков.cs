
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.Справочники;//Менеджер;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.Справочники//Менеджер
{
	///<summary>
	///(Упр)
	///</summary>
	public partial class ОстаткиОтпусков:СправочникМенеджер
	{


		public static СправочникиВыборка.ОстаткиОтпусков Выбрать()
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
					,_Description [Наименование],_Fld3111RRef [Физлицо],_Fld3112 [ДатаАктуальности]
		 From _Reference182(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ОстаткиОтпусков();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ОстаткиОтпусков();
		
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1?true:false;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1?true:false;
							Ссылка.Наименование = Читалка.GetString(4);
							//Ссылка.Физлицо = new V82.СправочникиСсылка.ФизическиеЛица((byte[])Читалка.GetValue(5));
							Ссылка.ДатаАктуальности = Читалка.GetDateTime(6);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}

		public static V82.СправочникиОбъект.ОстаткиОтпусков СоздатьЭлемент()
		{
			var Объект = new V82.СправочникиОбъект.ОстаткиОтпусков();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.ЭтоГруппа = false;
			Объект.Физлицо = new V82.СправочникиСсылка.ФизическиеЛица();
			return Объект;
		}
	}
}
