
using System;
using System.Data.SqlClient;
using V82;
using V82.ДокументыСсылка;
using V82.Документы;//Менеджер;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.Документы//Менеджер
{
	public partial class ОбъявлениеНаВзносНаличными:ДокументМенеджер
	{
		
		public static ДокументыСсылка.ОбъявлениеНаВзносНаличными НайтиПоСсылке(Guid _Ссылка)
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
					,_Fld10576RRef [Организация]
					,_Fld10577RRef [СчетОрганизации]
					,_Fld10578RRef [Касса]
					,_Fld10579RRef [ВалютаДокумента]
					,_Fld10580 [СуммаДокумента]
					,_Fld10581RRef [Ответственный]
					,_Fld10582 [Оплачено]
					,_Fld10583 [ДатаОплаты]
					,_Fld10584RRef [СтатьяДвиженияДенежныхСредств]
					,_Fld10585 [Комментарий]
					From _Document452(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ОбъявлениеНаВзносНаличными();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.СуммаДокумента = Читалка.GetDecimal(7);
							Ссылка.Оплачено = ((byte[])Читалка.GetValue(9))[0]==1;
							Ссылка.ДатаОплаты = Читалка.GetDateTime(10);
							Ссылка.Комментарий = Читалка.GetString(12);
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
		
		public static ДокументыСсылка.ОбъявлениеНаВзносНаличными НайтиПоНомеру(string Номер)
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
					,_Fld10576RRef [Организация]
					,_Fld10577RRef [СчетОрганизации]
					,_Fld10578RRef [Касса]
					,_Fld10579RRef [ВалютаДокумента]
					,_Fld10580 [СуммаДокумента]
					,_Fld10581RRef [Ответственный]
					,_Fld10582 [Оплачено]
					,_Fld10583 [ДатаОплаты]
					,_Fld10584RRef [СтатьяДвиженияДенежныхСредств]
					,_Fld10585 [Комментарий]
					From _Document452(NOLOCK)
					Where _Number = @Номер";
					Команда.Parameters.AddWithValue("Номер", Номер);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ОбъявлениеНаВзносНаличными();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.СуммаДокумента = Читалка.GetDecimal(7);
							Ссылка.Оплачено = ((byte[])Читалка.GetValue(9))[0]==1;
							Ссылка.ДатаОплаты = Читалка.GetDateTime(10);
							Ссылка.Комментарий = Читалка.GetString(12);
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
		
		public static ДокументыВыборка.ОбъявлениеНаВзносНаличными Выбрать()
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
					,_Fld10576RRef [Организация]
					,_Fld10577RRef [СчетОрганизации]
					,_Fld10578RRef [Касса]
					,_Fld10579RRef [ВалютаДокумента]
					,_Fld10580 [СуммаДокумента]
					,_Fld10581RRef [Ответственный]
					,_Fld10582 [Оплачено]
					,_Fld10583 [ДатаОплаты]
					,_Fld10584RRef [СтатьяДвиженияДенежныхСредств]
					,_Fld10585 [Комментарий]
					From _Document452(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ОбъявлениеНаВзносНаличными();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ОбъявлениеНаВзносНаличными();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.СуммаДокумента = Читалка.GetDecimal(7);
							Ссылка.Оплачено = ((byte[])Читалка.GetValue(9))[0]==1;
							Ссылка.ДатаОплаты = Читалка.GetDateTime(10);
							Ссылка.Комментарий = Читалка.GetString(12);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ОбъявлениеНаВзносНаличными ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
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
					,_Fld10576RRef [Организация]
					,_Fld10577RRef [СчетОрганизации]
					,_Fld10578RRef [Касса]
					,_Fld10579RRef [ВалютаДокумента]
					,_Fld10580 [СуммаДокумента]
					,_Fld10581RRef [Ответственный]
					,_Fld10582 [Оплачено]
					,_Fld10583 [ДатаОплаты]
					,_Fld10584RRef [СтатьяДвиженияДенежныхСредств]
					,_Fld10585 [Комментарий]
					From _Document452(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ОбъявлениеНаВзносНаличными();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ОбъявлениеНаВзносНаличными();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.СуммаДокумента = Читалка.GetDecimal(7);
							Ссылка.Оплачено = ((byte[])Читалка.GetValue(9))[0]==1;
							Ссылка.ДатаОплаты = Читалка.GetDateTime(10);
							Ссылка.Комментарий = Читалка.GetString(12);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ОбъявлениеНаВзносНаличными ВыбратьПоНомеру(int Первые,string Мин,string Макс)
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
					,_Fld10576RRef [Организация]
					,_Fld10577RRef [СчетОрганизации]
					,_Fld10578RRef [Касса]
					,_Fld10579RRef [ВалютаДокумента]
					,_Fld10580 [СуммаДокумента]
					,_Fld10581RRef [Ответственный]
					,_Fld10582 [Оплачено]
					,_Fld10583 [ДатаОплаты]
					,_Fld10584RRef [СтатьяДвиженияДенежныхСредств]
					,_Fld10585 [Комментарий]
					From _Document452(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ОбъявлениеНаВзносНаличными();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ОбъявлениеНаВзносНаличными();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.СуммаДокумента = Читалка.GetDecimal(7);
							Ссылка.Оплачено = ((byte[])Читалка.GetValue(9))[0]==1;
							Ссылка.ДатаОплаты = Читалка.GetDateTime(10);
							Ссылка.Комментарий = Читалка.GetString(12);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ОбъявлениеНаВзносНаличными СтраницаПоСсылке(int Размер,int Номер)
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
					,_Fld10576RRef [Организация]
					,_Fld10577RRef [СчетОрганизации]
					,_Fld10578RRef [Касса]
					,_Fld10579RRef [ВалютаДокумента]
					,_Fld10580 [СуммаДокумента]
					,_Fld10581RRef [Ответственный]
					,_Fld10582 [Оплачено]
					,_Fld10583 [ДатаОплаты]
					,_Fld10584RRef [СтатьяДвиженияДенежныхСредств]
					,_Fld10585 [Комментарий]
					From _Document452(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ОбъявлениеНаВзносНаличными();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ОбъявлениеНаВзносНаличными();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.СуммаДокумента = Читалка.GetDecimal(7);
							Ссылка.Оплачено = ((byte[])Читалка.GetValue(9))[0]==1;
							Ссылка.ДатаОплаты = Читалка.GetDateTime(10);
							Ссылка.Комментарий = Читалка.GetString(12);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static ДокументыВыборка.ОбъявлениеНаВзносНаличными СтраницаПоНомеру(int Размер,int Номер)
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
					,_Fld10576RRef [Организация]
					,_Fld10577RRef [СчетОрганизации]
					,_Fld10578RRef [Касса]
					,_Fld10579RRef [ВалютаДокумента]
					,_Fld10580 [СуммаДокумента]
					,_Fld10581RRef [Ответственный]
					,_Fld10582 [Оплачено]
					,_Fld10583 [ДатаОплаты]
					,_Fld10584RRef [СтатьяДвиженияДенежныхСредств]
					,_Fld10585 [Комментарий]
					From _Document452(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ОбъявлениеНаВзносНаличными();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ОбъявлениеНаВзносНаличными();
							//ToDo: Читать нужно через GetValues()
							Ссылка.Ссылка = new Guid((byte[])Читалка.GetValue(0));
							var ПотокВерсии = ((byte[])Читалка.GetValue(1));
							Array.Reverse(ПотокВерсии);
							Ссылка.Версия =  BitConverter.ToInt64(ПотокВерсии, 0);
							Ссылка.ВерсияДанных =  Convert.ToBase64String(ПотокВерсии);
							Ссылка.ПометкаУдаления = ((byte[])Читалка.GetValue(2))[0]==1;
							Ссылка.СуммаДокумента = Читалка.GetDecimal(7);
							Ссылка.Оплачено = ((byte[])Читалка.GetValue(9))[0]==1;
							Ссылка.ДатаОплаты = Читалка.GetDateTime(10);
							Ссылка.Комментарий = Читалка.GetString(12);
							Выборка.Add(Ссылка);
						}
							return Выборка;
					}
				}
			}
		}
		
		public static V82.ДокументыОбъект.ОбъявлениеНаВзносНаличными СоздатьЭлемент()
		{
			var Объект = new V82.ДокументыОбъект.ОбъявлениеНаВзносНаличными();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.Комментарий = "";
			return Объект;
		}
	}
}