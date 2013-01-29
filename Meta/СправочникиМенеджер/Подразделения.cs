
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
	public partial class Подразделения:СправочникМенеджер
	{

		public static СправочникиСсылка.Подразделения НайтиПоКоду(decimal Код)
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
					,_Fld3195RRef [ВидПодразделения]
					,_Fld3196RRef [ВидЦФО]
					,_Fld3197RRef [ОсновнойПроект]
					,_Fld3198 [Порядок]
					From _Reference191(NOLOCK)
					Where _Code=@Код";
					Команда.Parameters.AddWithValue("Код", Код);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.Подразделения();
		
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1?true:false;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1?true:false;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
							Ссылка.ВидПодразделения = V82.Перечисления/*Ссылка*/.ВидыПодразделений.ПустаяСсылка.Получить((byte[])Читалка.GetValue(6));
							//Ссылка.ВидЦФО = new V82.СправочникиСсылка.ВидыЦФО((byte[])Читалка.GetValue(7));
							Ссылка.Порядок = Читалка.GetDecimal(9);
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

		public static СправочникиВыборка.Подразделения Выбрать()
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
					,_Description [Наименование],_Fld3195RRef [ВидПодразделения],_Fld3196RRef [ВидЦФО],_Fld3197RRef [ОсновнойПроект],_Fld3198 [Порядок]
		 From _Reference191(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.Подразделения();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.Подразделения();
		
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1?true:false;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1?true:false;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
							Ссылка.ВидПодразделения = V82.Перечисления/*Ссылка*/.ВидыПодразделений.ПустаяСсылка.Получить((byte[])Читалка.GetValue(6));
							//Ссылка.ВидЦФО = new V82.СправочникиСсылка.ВидыЦФО((byte[])Читалка.GetValue(7));
							Ссылка.Порядок = Читалка.GetDecimal(9);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}

		public static V82.СправочникиОбъект.Подразделения СоздатьЭлемент()
		{
			var Объект = new V82.СправочникиОбъект.Подразделения();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.ЭтоГруппа = false;
			Объект.ВидПодразделения = V82.Перечисления/*Ссылка*/.ВидыПодразделений.ПустаяСсылка;
			Объект.ВидЦФО = new V82.СправочникиСсылка.ВидыЦФО();
			return Объект;
		}
	}
}
