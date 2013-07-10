
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
	///<summary>
	///(Общ) 
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ТехнологическиеОперации:СправочникОбъект
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
		public Guid Родитель {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public bool ЭтоГруппа {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public string/*9*/ Код {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public string/*100*/ Наименование {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(10)]
		public V82.СправочникиСсылка.СтатьиЗатрат ОсновнаяСтатьяЗатратНаПроизводство {get;set;}//Основная статья затрат на производство
		///<summary>
		///(Регл)
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public V82.СправочникиСсылка.СпособыОтраженияЗарплатыВРеглУчете СпособОтраженияЗарплатыВБухучете {get;set;}//Способ отражения зарплаты в бухучете
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(12)]
		public V82.СправочникиСсылка.СпособыРаспределенияЗатратНаВыпуск ОсновнойСпособРаспределенияЗатратНаВыпуск {get;set;}//Основной способ распределения затрат на выпуск
		///<summary>
		///(Упр)
		///</summary>
		[DataMember]
		[ProtoMember(13)]
		public V82.СправочникиСсылка.НоменклатурныеГруппы ОсновнаяНоменклатурнаяГруппа {get;set;}//Основная номенклатурная группа
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(14)]
		public decimal/*(15.3)*/ Расценка {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.КлассификаторЕдиницИзмерения БазоваяЕдиницаИзмерения {get;set;}//Базовая единица измерения
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Валюты Валюта {get;set;}
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(17)]
		public decimal/*(10)*/ НормаВремени {get;set;}//Норма времени
		///<summary>
		///(Общ)
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public decimal/*(10.3)*/ Коэффициент {get;set;}
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
						Insert Into _Reference176(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_ParentIDRRef
						,_Folder
						,_Code
						,_Description
						,_Fld2052RRef
						,_Fld2053RRef
						,_Fld2054RRef
						,_Fld2055RRef
						,_Fld2056
						,_Fld2057RRef
						,_Fld2058RRef
						,_Fld2059
						,_Fld2060)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Предопределенный
						,@Родитель
						,@ЭтоГруппа
						,@Код
						,@Наименование
						,@ОсновнаяСтатьяЗатратНаПроизводство
						,@СпособОтраженияЗарплатыВБухучете
						,@ОсновнойСпособРаспределенияЗатратНаВыпуск
						,@ОсновнаяНоменклатурнаяГруппа
						,@Расценка
						,@БазоваяЕдиницаИзмерения
						,@Валюта
						,@НормаВремени
						,@Коэффициент)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Reference176
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_IsMetadata	= @Предопределенный
						,_ParentIDRRef	= @Родитель
						,_Folder	= @ЭтоГруппа
						,_Code	= @Код
						,_Description	= @Наименование
						,_Fld2052RRef	= @ОсновнаяСтатьяЗатратНаПроизводство
						,_Fld2053RRef	= @СпособОтраженияЗарплатыВБухучете
						,_Fld2054RRef	= @ОсновнойСпособРаспределенияЗатратНаВыпуск
						,_Fld2055RRef	= @ОсновнаяНоменклатурнаяГруппа
						,_Fld2056	= @Расценка
						,_Fld2057RRef	= @БазоваяЕдиницаИзмерения
						,_Fld2058RRef	= @Валюта
						,_Fld2059	= @НормаВремени
						,_Fld2060	= @Коэффициент
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Предопределенный", Предопределенный);
					Команда.Parameters.AddWithValue("Родитель", Родитель);
					Команда.Parameters.AddWithValue("ЭтоГруппа", ЭтоГруппа?new byte[]{0}:new byte[]{1});
					Команда.Parameters.AddWithValue("Код", Код);
					Команда.Parameters.AddWithValue("Наименование", Наименование);
					Команда.Parameters.AddWithValue("ОсновнаяСтатьяЗатратНаПроизводство", ОсновнаяСтатьяЗатратНаПроизводство.Ссылка);
					Команда.Parameters.AddWithValue("СпособОтраженияЗарплатыВБухучете", СпособОтраженияЗарплатыВБухучете.Ссылка);
					Команда.Parameters.AddWithValue("ОсновнойСпособРаспределенияЗатратНаВыпуск", ОсновнойСпособРаспределенияЗатратНаВыпуск.Ссылка);
					Команда.Parameters.AddWithValue("ОсновнаяНоменклатурнаяГруппа", ОсновнаяНоменклатурнаяГруппа.Ссылка);
					Команда.Parameters.AddWithValue("Расценка", Расценка);
					Команда.Parameters.AddWithValue("БазоваяЕдиницаИзмерения", БазоваяЕдиницаИзмерения.Ссылка);
					Команда.Parameters.AddWithValue("Валюта", Валюта.Ссылка);
					Команда.Parameters.AddWithValue("НормаВремени", НормаВремени);
					Команда.Parameters.AddWithValue("Коэффициент", Коэффициент);
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
					Команда.CommandText = @"Delete _Reference176
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}