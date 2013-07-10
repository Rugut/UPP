
using System;
using System.Data.SqlClient;
using V82;
using V82.ДокументыСсылка;
using V82.Документы;//Менеджер;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.Документы//Менеджер
{
	///<summary>
	///(Упр)
	///</summary>
	public partial class ИнвентаризацияТоваровОтданныхНаКомиссию:ДокументМенеджер
	{
		
		public static ДокументыСсылка.ИнвентаризацияТоваровОтданныхНаКомиссию НайтиПоСсылке(Guid _Ссылка)
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
					,_Fld5180RRef [Организация]
					,_Fld5181RRef [Контрагент]
					,_Fld5182RRef [ДоговорКонтрагента]
					,_Fld5183RRef [Подразделение]
					,_Fld5184 [Комментарий]
					,_Fld5185RRef [Ответственный]
					,_Fld5186_TYPE [Сделка_Тип],_Fld5186_RRRef [Сделка],_Fld5186_RTRef [Сделка_Вид]
					From _Document291(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ИнвентаризацияТоваровОтданныхНаКомиссию();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(7);
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
		
		public static ДокументыСсылка.ИнвентаризацияТоваровОтданныхНаКомиссию НайтиПоНомеру(string Номер)
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
					,_Fld5180RRef [Организация]
					,_Fld5181RRef [Контрагент]
					,_Fld5182RRef [ДоговорКонтрагента]
					,_Fld5183RRef [Подразделение]
					,_Fld5184 [Комментарий]
					,_Fld5185RRef [Ответственный]
					,_Fld5186_TYPE [Сделка_Тип],_Fld5186_RRRef [Сделка],_Fld5186_RTRef [Сделка_Вид]
					From _Document291(NOLOCK)
					Where _Number = @Номер";
					Команда.Parameters.AddWithValue("Номер", Номер);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ИнвентаризацияТоваровОтданныхНаКомиссию();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(7);
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
		
		public static ДокументыВыборка.ИнвентаризацияТоваровОтданныхНаКомиссию Выбрать()
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
					,_Fld5180RRef [Организация]
					,_Fld5181RRef [Контрагент]
					,_Fld5182RRef [ДоговорКонтрагента]
					,_Fld5183RRef [Подразделение]
					,_Fld5184 [Комментарий]
					,_Fld5185RRef [Ответственный]
					,_Fld5186_TYPE [Сделка_Тип],_Fld5186_RRRef [Сделка],_Fld5186_RTRef [Сделка_Вид]
					From _Document291(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ИнвентаризацияТоваровОтданныхНаКомиссию();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ИнвентаризацияТоваровОтданныхНаКомиссию();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(7);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ИнвентаризацияТоваровОтданныхНаКомиссию ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
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
					,_Fld5180RRef [Организация]
					,_Fld5181RRef [Контрагент]
					,_Fld5182RRef [ДоговорКонтрагента]
					,_Fld5183RRef [Подразделение]
					,_Fld5184 [Комментарий]
					,_Fld5185RRef [Ответственный]
					,_Fld5186_TYPE [Сделка_Тип],_Fld5186_RRRef [Сделка],_Fld5186_RTRef [Сделка_Вид]
					From _Document291(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ИнвентаризацияТоваровОтданныхНаКомиссию();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ИнвентаризацияТоваровОтданныхНаКомиссию();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(7);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ИнвентаризацияТоваровОтданныхНаКомиссию ВыбратьПоНомеру(int Первые,string Мин,string Макс)
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
					,_Fld5180RRef [Организация]
					,_Fld5181RRef [Контрагент]
					,_Fld5182RRef [ДоговорКонтрагента]
					,_Fld5183RRef [Подразделение]
					,_Fld5184 [Комментарий]
					,_Fld5185RRef [Ответственный]
					,_Fld5186_TYPE [Сделка_Тип],_Fld5186_RRRef [Сделка],_Fld5186_RTRef [Сделка_Вид]
					From _Document291(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ИнвентаризацияТоваровОтданныхНаКомиссию();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ИнвентаризацияТоваровОтданныхНаКомиссию();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(7);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ИнвентаризацияТоваровОтданныхНаКомиссию СтраницаПоСсылке(int Размер,int Номер)
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
					,_Fld5180RRef [Организация]
					,_Fld5181RRef [Контрагент]
					,_Fld5182RRef [ДоговорКонтрагента]
					,_Fld5183RRef [Подразделение]
					,_Fld5184 [Комментарий]
					,_Fld5185RRef [Ответственный]
					,_Fld5186_TYPE [Сделка_Тип],_Fld5186_RRRef [Сделка],_Fld5186_RTRef [Сделка_Вид]
					From _Document291(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ИнвентаризацияТоваровОтданныхНаКомиссию();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ИнвентаризацияТоваровОтданныхНаКомиссию();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(7);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ИнвентаризацияТоваровОтданныхНаКомиссию СтраницаПоНомеру(int Размер,int Номер)
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
					,_Fld5180RRef [Организация]
					,_Fld5181RRef [Контрагент]
					,_Fld5182RRef [ДоговорКонтрагента]
					,_Fld5183RRef [Подразделение]
					,_Fld5184 [Комментарий]
					,_Fld5185RRef [Ответственный]
					,_Fld5186_TYPE [Сделка_Тип],_Fld5186_RRRef [Сделка],_Fld5186_RTRef [Сделка_Вид]
					From _Document291(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ИнвентаризацияТоваровОтданныхНаКомиссию();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ИнвентаризацияТоваровОтданныхНаКомиссию();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.Комментарий = Читалка.GetString(7);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.ДокументыОбъект.ИнвентаризацияТоваровОтданныхНаКомиссию СоздатьЭлемент()
		{
			var Объект = new V82.ДокументыОбъект.ИнвентаризацияТоваровОтданныхНаКомиссию();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.Комментарий = "";
			return Объект;
		}
	}
}