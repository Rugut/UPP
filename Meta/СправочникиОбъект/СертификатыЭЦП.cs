
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	public partial class СертификатыЭЦП:СправочникОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		public Guid Ссылка;
		public long Версия;
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		public bool ПометкаУдаления;
		public bool Предопределенный;
		public Guid Владелец;
		public bool ЭтоГруппа;
		public Guid Родитель;
		public string/*100*/ Наименование;
		public string/*(150)*/ ДолжностьПоСертификату;//Должность по сертификату
		public bool ЗапомнитьПарольКСертификату;//Запомнить пароль к сертификату
		public string/*(0)*/ Назначение;
		public bool ОграничитьДоступКСертификату;//Ограничить доступ к сертификату
		public V82.СправочникиСсылка.Организации Организация;
		public bool Отозван;
		public string/*(255)*/ Отпечаток;
		public string/*(50)*/ ПарольПользователя;//Пароль пользователя
		///<summary>
		///Пользователь, кому доступен сертификат подписи
		///</summary>
		public V82.СправочникиСсылка.Пользователи Пользователь;
		public bool ПроверятьСоставИсполнителей;//Проверять состав исполнителей
		///<summary>
		///Двоичные данные сертификата
		///</summary>
		public ХранилищеЗначения ФайлСертификата;//Файл сертификата
		public void Записать()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Reference228(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Description
						,_Fld3409
						,_Fld3410
						,_Fld3411
						,_Fld3412
						,_Fld3413RRef
						,_Fld3414
						,_Fld3415
						,_Fld3416
						,_Fld3417RRef
						,_Fld3418
						,_Fld3419)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Наименование
						,@ДолжностьПоСертификату
						,@ЗапомнитьПарольКСертификату
						,@Назначение
						,@ОграничитьДоступКСертификату
						,@Организация
						,@Отозван
						,@Отпечаток
						,@ПарольПользователя
						,@Пользователь
						,@ПроверятьСоставИсполнителей
						,@ФайлСертификата)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference228
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Description	= @Наименование
						,_Fld3409	= @ДолжностьПоСертификату
						,_Fld3410	= @ЗапомнитьПарольКСертификату
						,_Fld3411	= @Назначение
						,_Fld3412	= @ОграничитьДоступКСертификату
						,_Fld3413RRef	= @Организация
						,_Fld3414	= @Отозван
						,_Fld3415	= @Отпечаток
						,_Fld3416	= @ПарольПользователя
						,_Fld3417RRef	= @Пользователь
						,_Fld3418	= @ПроверятьСоставИсполнителей
						,_Fld3419	= @ФайлСертификата
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("ДолжностьПоСертификату", ДолжностьПоСертификату);
					Команда.Parameters.AddWithValue("ЗапомнитьПарольКСертификату", ЗапомнитьПарольКСертификату);
					Команда.Parameters.AddWithValue("Назначение", Назначение);
					Команда.Parameters.AddWithValue("ОграничитьДоступКСертификату", ОграничитьДоступКСертификату);
					Команда.Parameters.AddWithValue("Организация", Организация.Ссылка);
					Команда.Parameters.AddWithValue("Отозван", Отозван);
					Команда.Parameters.AddWithValue("Отпечаток", Отпечаток);
					Команда.Parameters.AddWithValue("ПарольПользователя", ПарольПользователя);
					Команда.Parameters.AddWithValue("Пользователь", Пользователь.Ссылка);
					Команда.Parameters.AddWithValue("ПроверятьСоставИсполнителей", ПроверятьСоставИсполнителей);
					Команда.ExecuteNonQuery();
				}
			}
		}
		public void Удалить()
		{
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					Команда.CommandText = @"Delete _Reference228
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}
