
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.СправочникиСсылка;
using V82.СправочникиОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.СправочникиОбъект
{
	[ProtoContract]
	[DataContract]
	public partial class ВерсииФайлов:СправочникОбъект
	{
		public bool _ЭтоНовый;
		public bool ЭтоНовый()
		{
			return _ЭтоНовый;
		}
		[DataMember]
		[ProtoMember(1)]
		public Guid Ссылка {get;set;}
		[DataMember]
		[ProtoMember(2)]
		public long Версия {get;set;}
		[DataMember]
		[ProtoMember(3)]
		public string ВерсияДанных {get;set;}
		/*static хэш сумма состава и порядка реквизитов*/
		/*версия класса восстановленного из пакета*/
		[DataMember]
		[ProtoMember(4)]
		public bool ПометкаУдаления {get;set;}
		[DataMember]
		[ProtoMember(5)]
		public bool Предопределенный {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public string/*11*/ Код {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*150*/ Наименование {get;set;}
		///<summary>
		///Автор - пользователь, создавший версию
		///</summary>
		[DataMember]
		[ProtoMember(8)]
		public V82.СправочникиСсылка.Пользователи Автор {get;set;}
		///<summary>
		///Дата модификации файла - приведенная к Гринвичу (очищенная от смещения летнего времени и смещения зоны)
		///</summary>
		[DataMember]
		[ProtoMember(9)]
		public DateTime ДатаМодификацииУниверсальная {get;set;}//Дата модификации универсальная
		///<summary>
		///Дата создания версии
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public DateTime ДатаСоздания {get;set;}//Дата создания
		///<summary>
		///Файл версии зашифрован
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public bool Зашифрован {get;set;}
		///<summary>
		///Индекс иконки, соответствующей расширению файла, для показа в списке
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public decimal/*(10)*/ ИндексКартинки {get;set;}//Индекс картинки
		///<summary>
		///Комментарий к версии
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public string/*(0)*/ Комментарий {get;set;}
		///<summary>
		///Номер данной версии
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(5)*/ НомерВерсии {get;set;}//Номер версии
		///<summary>
		///Файл версии подписан ЭЦП
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public bool ПодписанЭЦП {get;set;}//Подписан ЭЦП
		///<summary>
		///Полное наименование (длиной до 256 символов)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public string/*(256)*/ ПолноеНаименование {get;set;}//Полное наименование
		///<summary>
		///Дополнительный путь к файлу на диске (в случае если ТипХраненияФайла - на диске)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public string/*(0)*/ ПутьКФайлу {get;set;}//Путь к файлу
		///<summary>
		///Размер файла версии
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public decimal/*(10)*/ Размер {get;set;}
		///<summary>
		///Расширение файла версии
		///</summary>
		[DataMember]
		[ProtoMember(19)]
		public string/*(10)*/ Расширение {get;set;}
		///<summary>
		///Родительская версия для данной версии - возможна древесная структура версий
		///</summary>
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.ВерсииФайлов РодительскаяВерсия {get;set;}//Родительская версия
		///<summary>
		///Статус извлечения текста - для фонового задания извлечения текста
		///</summary>
		[DataMember]
		[ProtoMember(21)]
		public V82.Перечисления/*Ссылка*/.СтатусыИзвлеченияТекстаФайлов СтатусИзвлеченияТекста {get;set;}//Статус извлечения текста
		///<summary>
		///Текст, извлеченный из файла - для полнотекстового поиска
		///</summary>
		[DataMember]
		[ProtoMember(22)]
		public ХранилищеЗначения ТекстХранилище {get;set;}//Текст
		///<summary>
		///Где хранятся файлы - в базе как ХранилищеЗначения или в каталоге на диске
		///</summary>
		[DataMember]
		[ProtoMember(23)]
		public V82.Перечисления/*Ссылка*/.ТипыХраненияФайлов ТипХраненияФайла {get;set;}//Тип хранения файла
		///<summary>
		///Ссылка на том (в случае если ТипХраненияФайла - на диске)
		///</summary>
		[DataMember]
		[ProtoMember(24)]
		public V82.СправочникиСсылка.ТомаХраненияФайлов Том {get;set;}
		///<summary>
		///Файл версии
		///</summary>
		[DataMember]
		[ProtoMember(25)]
		public ХранилищеЗначения ФайлХранилище {get;set;}//Файл
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для справочников.
			//Контроль уникальности номера для документов, в границах префикса.
			//Контроль владельца, он не может быть группой.
			//Контроль владельца он должен быть задан.
			//Контроль родителя он должен быть группой.
			//Контроль количества уровней, должен соотвествовать метаданным.
			//Контроль версии, объект не должен был быть записан перед чтением текущей записи, алгоритм версионника.
			//Контроль уникальности ссылки
			//Контроль зацикливания
			//Опционально контроль битых ссылок.
			//Соблюдейние транзакционности. ПередЗаписью. Открытие транзации. Валидации. ПриЗаписи. Фиксация транзакции. Информирование о записи элемента.
			using (var Подключение = new SqlConnection(СтрокаСоединения))
			{
				Подключение.Open();
				using (var Команда = Подключение.CreateCommand())
				{
					if(_ЭтоНовый)
					{
						Команда.CommandText = @"
						Insert Into _Reference23089(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Code
						,_Description
						,_Fld23340RRef
						,_Fld23341
						,_Fld23342
						,_Fld23343
						,_Fld23344
						,_Fld23345
						,_Fld23346
						,_Fld23347
						,_Fld23348
						,_Fld23349
						,_Fld23350
						,_Fld23351
						,_Fld23352RRef
						,_Fld23353RRef
						,_Fld23354
						,_Fld23355RRef
						,_Fld23356RRef
						,_Fld23357)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Код
						,@Наименование
						,@Автор
						,@ДатаМодификацииУниверсальная
						,@ДатаСоздания
						,@Зашифрован
						,@ИндексКартинки
						,@Комментарий
						,@НомерВерсии
						,@ПодписанЭЦП
						,@ПолноеНаименование
						,@ПутьКФайлу
						,@Размер
						,@Расширение
						,@РодительскаяВерсия
						,@СтатусИзвлеченияТекста
						,@ТекстХранилище
						,@ТипХраненияФайла
						,@Том
						,@ФайлХранилище)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference23089
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld23340RRef	= @Автор
						,_Fld23341	= @ДатаМодификацииУниверсальная
						,_Fld23342	= @ДатаСоздания
						,_Fld23343	= @Зашифрован
						,_Fld23344	= @ИндексКартинки
						,_Fld23345	= @Комментарий
						,_Fld23346	= @НомерВерсии
						,_Fld23347	= @ПодписанЭЦП
						,_Fld23348	= @ПолноеНаименование
						,_Fld23349	= @ПутьКФайлу
						,_Fld23350	= @Размер
						,_Fld23351	= @Расширение
						,_Fld23352RRef	= @РодительскаяВерсия
						,_Fld23353RRef	= @СтатусИзвлеченияТекста
						,_Fld23354	= @ТекстХранилище
						,_Fld23355RRef	= @ТипХраненияФайла
						,_Fld23356RRef	= @Том
						,_Fld23357	= @ФайлХранилище
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("Автор", Автор.Ссылка);
					Команда.Parameters.AddWithValue("ДатаМодификацииУниверсальная", ДатаМодификацииУниверсальная);
					Команда.Parameters.AddWithValue("ДатаСоздания", ДатаСоздания);
					Команда.Parameters.AddWithValue("Зашифрован", Зашифрован);
					Команда.Parameters.AddWithValue("ИндексКартинки", ИндексКартинки);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("НомерВерсии", НомерВерсии);
					Команда.Parameters.AddWithValue("ПодписанЭЦП", ПодписанЭЦП);
					Команда.Parameters.AddWithValue("ПолноеНаименование", ПолноеНаименование);
					Команда.Parameters.AddWithValue("ПутьКФайлу", ПутьКФайлу);
					Команда.Parameters.AddWithValue("Размер", Размер);
					Команда.Parameters.AddWithValue("Расширение", Расширение);
					Команда.Parameters.AddWithValue("РодительскаяВерсия", РодительскаяВерсия.Ссылка);
					Команда.Parameters.AddWithValue("СтатусИзвлеченияТекста", СтатусИзвлеченияТекста.Ключ());
					Команда.Parameters.AddWithValue("ТекстХранилище",new byte[0]);
					Команда.Parameters.AddWithValue("ТипХраненияФайла", ТипХраненияФайла.Ключ());
					Команда.Parameters.AddWithValue("Том", Том.Ссылка);
					Команда.Parameters.AddWithValue("ФайлХранилище",new byte[0]);
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
					Команда.CommandText = @"Delete _Reference23089
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}