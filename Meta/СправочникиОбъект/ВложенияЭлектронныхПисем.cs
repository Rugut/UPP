
using System;
using System.Data.SqlClient;
using V82;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	///<summary>
	///Вложения электронных писем
	///</summary>
	public partial class ВложенияЭлектронныхПисем:СправочникОбъект
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
		///<summary>
		///Объект
		///</summary>
		public V82.ДокументыСсылка.ЭлектронноеПисьмо Объект;
		///<summary>
		///Имя файла
		///</summary>
		public string/*(0)*/ ИмяФайла;//Имя файла
		///<summary>
		///Хранилище
		///</summary>
		public ХранилищеЗначения Хранилище;
		public string/*(200)*/ ИДФайлаПочтовогоПисьма;//ИДФайла почтового письма
		public object Предмет;
		public ХранилищеЗначения ТекстФайла;//Текст файла
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
						Insert Into _Reference67(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Description
						,_Fld1986RRef
						,_Fld1987
						,_Fld1988
						,_Fld1989
						,_Fld1991)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Наименование
						,@Объект
						,@ИмяФайла
						,@Хранилище
						,@ИДФайлаПочтовогоПисьма
						,@ТекстФайла)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference67
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Description	= @Наименование
						,_Fld1986RRef	= @Объект
						,_Fld1987	= @ИмяФайла
						,_Fld1988	= @Хранилище
						,_Fld1989	= @ИДФайлаПочтовогоПисьма
						,_Fld1991	= @ТекстФайла
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("Объект", Объект.Ссылка);
					Команда.Parameters.AddWithValue("ИмяФайла", ИмяФайла);
					Команда.Parameters.AddWithValue("Хранилище",new byte[0]);
					Команда.Parameters.AddWithValue("ИДФайлаПочтовогоПисьма", ИДФайлаПочтовогоПисьма);
					Команда.Parameters.AddWithValue("ТекстФайла",new byte[0]);
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
					Команда.CommandText = @"Delete _Reference67
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
		/*МодульОбъекта*/

		public void ПередЗаписью(/*Отказ*/)
		{
			if(true/*ОбменДанными.Загрузка*/)
			{
			}
			if(true/*ТипЗнч(Объект) = Тип("ДокументСсылка.ЭлектронноеПисьмо")
	   И ТипЗнч(Объект.ПредметКонтакта) = Тип("СправочникСсылка.ФизическиеЛица")*/)
			{
				//Предмет = Объект.ПредметКонтакта;
			}
		}
	}
}
