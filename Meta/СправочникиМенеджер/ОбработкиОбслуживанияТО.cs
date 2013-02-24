
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
	///Данный справочник содержит обработки обслуживания торгового оборудования.
	///</summary>
	public partial class ОбработкиОбслуживанияТО:СправочникМенеджер
	{
		
		public static СправочникиСсылка.ОбработкиОбслуживанияТО НайтиПоКоду(string Код)
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
					,_Fld2990 [Описание]
					,_Fld2991RRef [Вид]
					,_Fld2992 [ИмяФайла]
					,_Fld2993 [Обработка]
					,_Fld2995 [Идентификатор]
					,_Fld2996 [ВерсияAPI]
					From _Reference168(NOLOCK)
					Where _Code=@Код";
					Команда.Parameters.AddWithValue("Код", Код);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ОбработкиОбслуживанияТО();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1?true:false;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1?true:false;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
							Ссылка.Описание = Читалка.GetString(6);
							Ссылка.Вид = V82.Перечисления/*Ссылка*/.ВидыТорговогоОборудования.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
							Ссылка.ИмяФайла = Читалка.GetString(8);
							Ссылка.Идентификатор = Читалка.GetString(10);
							Ссылка.ВерсияAPI = Читалка.GetDecimal(11);
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
		
		public static СправочникиВыборка.ОбработкиОбслуживанияТО Выбрать()
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
					,_Description [Наименование]
					,_Fld2990 [Описание]
					,_Fld2991RRef [Вид]
					,_Fld2992 [ИмяФайла]
					,_Fld2993 [Обработка]
					,_Fld2995 [Идентификатор]
					,_Fld2996 [ВерсияAPI]
					From _Reference168(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ОбработкиОбслуживанияТО();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ОбработкиОбслуживанияТО();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1?true:false;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1?true:false;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
							Ссылка.Описание = Читалка.GetString(6);
							Ссылка.Вид = V82.Перечисления/*Ссылка*/.ВидыТорговогоОборудования.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
							Ссылка.ИмяФайла = Читалка.GetString(8);
							Ссылка.Идентификатор = Читалка.GetString(10);
							Ссылка.ВерсияAPI = Читалка.GetDecimal(11);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ОбработкиОбслуживанияТО ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = string.Format(@"Select top {0} 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld2990 [Описание]
					,_Fld2991RRef [Вид]
					,_Fld2992 [ИмяФайла]
					,_Fld2993 [Обработка]
					,_Fld2995 [Идентификатор]
					,_Fld2996 [ВерсияAPI]
					From _Reference168(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.СправочникиВыборка.ОбработкиОбслуживанияТО();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ОбработкиОбслуживанияТО();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1?true:false;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1?true:false;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
							Ссылка.Описание = Читалка.GetString(6);
							Ссылка.Вид = V82.Перечисления/*Ссылка*/.ВидыТорговогоОборудования.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
							Ссылка.ИмяФайла = Читалка.GetString(8);
							Ссылка.Идентификатор = Читалка.GetString(10);
							Ссылка.ВерсияAPI = Читалка.GetDecimal(11);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ОбработкиОбслуживанияТО ВыбратьПоКоду(int Первые,string Мин,string Макс)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = string.Format(@"Select top {0} 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld2990 [Описание]
					,_Fld2991RRef [Вид]
					,_Fld2992 [ИмяФайла]
					,_Fld2993 [Обработка]
					,_Fld2995 [Идентификатор]
					,_Fld2996 [ВерсияAPI]
					From _Reference168(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.СправочникиВыборка.ОбработкиОбслуживанияТО();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ОбработкиОбслуживанияТО();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1?true:false;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1?true:false;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
							Ссылка.Описание = Читалка.GetString(6);
							Ссылка.Вид = V82.Перечисления/*Ссылка*/.ВидыТорговогоОборудования.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
							Ссылка.ИмяФайла = Читалка.GetString(8);
							Ссылка.Идентификатор = Читалка.GetString(10);
							Ссылка.ВерсияAPI = Читалка.GetDecimal(11);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ОбработкиОбслуживанияТО ВыбратьПоНаименованию(int Первые,string Мин,string Макс)
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = string.Format(@"Select top {0} 
					_IDRRef [Ссылка]
					,_Version [Версия]
					,_Marked [ПометкаУдаления]
					,_IsMetadata [Предопределенный]
					,_Code [Код]
					,_Description [Наименование]
					,_Fld2990 [Описание]
					,_Fld2991RRef [Вид]
					,_Fld2992 [ИмяФайла]
					,_Fld2993 [Обработка]
					,_Fld2995 [Идентификатор]
					,_Fld2996 [ВерсияAPI]
					From _Reference168(NOLOCK)
					Where _Description between @Мин and @Макс
					Order by _Description", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.СправочникиВыборка.ОбработкиОбслуживанияТО();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ОбработкиОбслуживанияТО();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1?true:false;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1?true:false;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
							Ссылка.Описание = Читалка.GetString(6);
							Ссылка.Вид = V82.Перечисления/*Ссылка*/.ВидыТорговогоОборудования.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
							Ссылка.ИмяФайла = Читалка.GetString(8);
							Ссылка.Идентификатор = Читалка.GetString(10);
							Ссылка.ВерсияAPI = Читалка.GetDecimal(11);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ОбработкиОбслуживанияТО СтраницаПоСсылке(int Размер,int Номер)
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
					,_Description [Наименование]
					,_Fld2990 [Описание]
					,_Fld2991RRef [Вид]
					,_Fld2992 [ИмяФайла]
					,_Fld2993 [Обработка]
					,_Fld2995 [Идентификатор]
					,_Fld2996 [ВерсияAPI]
					From _Reference168(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ОбработкиОбслуживанияТО();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ОбработкиОбслуживанияТО();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1?true:false;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1?true:false;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
							Ссылка.Описание = Читалка.GetString(6);
							Ссылка.Вид = V82.Перечисления/*Ссылка*/.ВидыТорговогоОборудования.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
							Ссылка.ИмяФайла = Читалка.GetString(8);
							Ссылка.Идентификатор = Читалка.GetString(10);
							Ссылка.ВерсияAPI = Читалка.GetDecimal(11);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ОбработкиОбслуживанияТО СтраницаПоКоду(int Размер,int Номер)
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
					,_Description [Наименование]
					,_Fld2990 [Описание]
					,_Fld2991RRef [Вид]
					,_Fld2992 [ИмяФайла]
					,_Fld2993 [Обработка]
					,_Fld2995 [Идентификатор]
					,_Fld2996 [ВерсияAPI]
					From _Reference168(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ОбработкиОбслуживанияТО();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ОбработкиОбслуживанияТО();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1?true:false;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1?true:false;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
							Ссылка.Описание = Читалка.GetString(6);
							Ссылка.Вид = V82.Перечисления/*Ссылка*/.ВидыТорговогоОборудования.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
							Ссылка.ИмяФайла = Читалка.GetString(8);
							Ссылка.Идентификатор = Читалка.GetString(10);
							Ссылка.ВерсияAPI = Читалка.GetDecimal(11);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static СправочникиВыборка.ОбработкиОбслуживанияТО СтраницаПоНаименованию(int Размер,int Номер)
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
					,_Description [Наименование]
					,_Fld2990 [Описание]
					,_Fld2991RRef [Вид]
					,_Fld2992 [ИмяФайла]
					,_Fld2993 [Обработка]
					,_Fld2995 [Идентификатор]
					,_Fld2996 [ВерсияAPI]
					From _Reference168(NOLOCK)";
					var Выборка = new V82.СправочникиВыборка.ОбработкиОбслуживанияТО();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new СправочникиСсылка.ОбработкиОбслуживанияТО();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1?true:false;
							Ссылка.Предопределенный = ((byte[])Читалка.GetValue(3))[0]==1?true:false;
							Ссылка.Код = Читалка.GetString(4);
							Ссылка.Наименование = Читалка.GetString(5);
							Ссылка.Описание = Читалка.GetString(6);
							Ссылка.Вид = V82.Перечисления/*Ссылка*/.ВидыТорговогоОборудования.ПустаяСсылка.Получить((byte[])Читалка.GetValue(7));
							Ссылка.ИмяФайла = Читалка.GetString(8);
							Ссылка.Идентификатор = Читалка.GetString(10);
							Ссылка.ВерсияAPI = Читалка.GetDecimal(11);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.СправочникиОбъект.ОбработкиОбслуживанияТО СоздатьЭлемент()
		{
			var Объект = new V82.СправочникиОбъект.ОбработкиОбслуживанияТО();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.Описание = "";
			Объект.ИмяФайла = "";
			Объект.Идентификатор = "";
			Объект.Вид = V82.Перечисления/*Ссылка*/.ВидыТорговогоОборудования.ПустаяСсылка;
			return Объект;
		}
	}
}