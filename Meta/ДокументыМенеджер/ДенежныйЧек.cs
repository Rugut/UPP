
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
	///(Упр) Чек на получение наличных денег с расчетного счета
	///</summary>
	public partial class ДенежныйЧек:ДокументМенеджер
	{
		
		public static ДокументыСсылка.ДенежныйЧек НайтиПоСсылке(Guid _Ссылка)
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
					,_Fld4120RRef [Организация]
					,_Fld4121RRef [СчетОрганизации]
					,_Fld4122RRef [Касса]
					,_Fld4123RRef [ВалютаДокумента]
					,_Fld4124 [СуммаДокумента]
					,_Fld4125RRef [Ответственный]
					,_Fld4126 [Оплачено]
					,_Fld4127 [ДатаОплаты]
					,_Fld4128RRef [СтатьяДвиженияДенежныхСредств]
					,_Fld4129 [Комментарий]
					From _Document248(NOLOCK)
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", _Ссылка);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ДенежныйЧек();
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
		
		public static ДокументыСсылка.ДенежныйЧек НайтиПоНомеру(string Номер)
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
					,_Fld4120RRef [Организация]
					,_Fld4121RRef [СчетОрганизации]
					,_Fld4122RRef [Касса]
					,_Fld4123RRef [ВалютаДокумента]
					,_Fld4124 [СуммаДокумента]
					,_Fld4125RRef [Ответственный]
					,_Fld4126 [Оплачено]
					,_Fld4127 [ДатаОплаты]
					,_Fld4128RRef [СтатьяДвиженияДенежныхСредств]
					,_Fld4129 [Комментарий]
					From _Document248(NOLOCK)
					Where _Number = @Номер";
					Команда.Parameters.AddWithValue("Номер", Номер);
					using (var Читалка = Команда.ExecuteReader())
					{
						if (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ДенежныйЧек();
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
		
		public static ДокументыВыборка.ДенежныйЧек Выбрать()
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
					,_Fld4120RRef [Организация]
					,_Fld4121RRef [СчетОрганизации]
					,_Fld4122RRef [Касса]
					,_Fld4123RRef [ВалютаДокумента]
					,_Fld4124 [СуммаДокумента]
					,_Fld4125RRef [Ответственный]
					,_Fld4126 [Оплачено]
					,_Fld4127 [ДатаОплаты]
					,_Fld4128RRef [СтатьяДвиженияДенежныхСредств]
					,_Fld4129 [Комментарий]
					From _Document248(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ДенежныйЧек();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ДенежныйЧек();
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
		
		public static ДокументыВыборка.ДенежныйЧек ВыбратьПоСсылке(int Первые,Guid Мин,Guid Макс)
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
					,_Fld4120RRef [Организация]
					,_Fld4121RRef [СчетОрганизации]
					,_Fld4122RRef [Касса]
					,_Fld4123RRef [ВалютаДокумента]
					,_Fld4124 [СуммаДокумента]
					,_Fld4125RRef [Ответственный]
					,_Fld4126 [Оплачено]
					,_Fld4127 [ДатаОплаты]
					,_Fld4128RRef [СтатьяДвиженияДенежныхСредств]
					,_Fld4129 [Комментарий]
					From _Document248(NOLOCK)
					Where _IDRRef between @Мин and @Макс
					Order by _IDRRef", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ДенежныйЧек();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ДенежныйЧек();
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
		
		public static ДокументыВыборка.ДенежныйЧек ВыбратьПоНомеру(int Первые,string Мин,string Макс)
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
					,_Fld4120RRef [Организация]
					,_Fld4121RRef [СчетОрганизации]
					,_Fld4122RRef [Касса]
					,_Fld4123RRef [ВалютаДокумента]
					,_Fld4124 [СуммаДокумента]
					,_Fld4125RRef [Ответственный]
					,_Fld4126 [Оплачено]
					,_Fld4127 [ДатаОплаты]
					,_Fld4128RRef [СтатьяДвиженияДенежныхСредств]
					,_Fld4129 [Комментарий]
					From _Document248(NOLOCK)
					Where _Code between @Мин and @Макс
					Order by _Code", Первые);
					Команда.Parameters.AddWithValue("Мин", Мин);
					Команда.Parameters.AddWithValue("Макс", Макс);
					var Выборка = new V82.ДокументыВыборка.ДенежныйЧек();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ДенежныйЧек();
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
		
		public static ДокументыВыборка.ДенежныйЧек СтраницаПоСсылке(int Размер,int Номер)
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
					,_Fld4120RRef [Организация]
					,_Fld4121RRef [СчетОрганизации]
					,_Fld4122RRef [Касса]
					,_Fld4123RRef [ВалютаДокумента]
					,_Fld4124 [СуммаДокумента]
					,_Fld4125RRef [Ответственный]
					,_Fld4126 [Оплачено]
					,_Fld4127 [ДатаОплаты]
					,_Fld4128RRef [СтатьяДвиженияДенежныхСредств]
					,_Fld4129 [Комментарий]
					From _Document248(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ДенежныйЧек();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ДенежныйЧек();
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
		
		public static ДокументыВыборка.ДенежныйЧек СтраницаПоНомеру(int Размер,int Номер)
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
					,_Fld4120RRef [Организация]
					,_Fld4121RRef [СчетОрганизации]
					,_Fld4122RRef [Касса]
					,_Fld4123RRef [ВалютаДокумента]
					,_Fld4124 [СуммаДокумента]
					,_Fld4125RRef [Ответственный]
					,_Fld4126 [Оплачено]
					,_Fld4127 [ДатаОплаты]
					,_Fld4128RRef [СтатьяДвиженияДенежныхСредств]
					,_Fld4129 [Комментарий]
					From _Document248(NOLOCK)";
					var Выборка = new V82.ДокументыВыборка.ДенежныйЧек();
					using (var Читалка = Команда.ExecuteReader())
					{
						while (Читалка.Read())
						{
							var Ссылка = new ДокументыСсылка.ДенежныйЧек();
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
		
		public static V82.ДокументыОбъект.ДенежныйЧек СоздатьЭлемент()
		{
			var Объект = new V82.ДокументыОбъект.ДенежныйЧек();
			Объект._ЭтоНовый = true;
			Объект.Ссылка = Guid.NewGuid();/*http://msdn.microsoft.com/ru-ru/library/aa379322(VS.85).aspx*/
			Объект.Комментарий = "";
			return Объект;
		}
	}
}