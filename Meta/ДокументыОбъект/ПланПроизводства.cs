﻿
using System;
using System.Data.SqlClient;
using System.Globalization;
using System.Runtime.Serialization;
using ProtoBuf;/*https://github.com/ServiceStack/ServiceStack/tree/master/lib*/
using ServiceStack.Text;/*https://github.com/ServiceStack/ServiceStack.Text*/
using V82;
using V82.ОбщиеОбъекты;
using V82.ДокументыСсылка;
using V82.ДокументыОбъект;
using V82.ДокументыСсылка;
using V82.Перечисления;//Ссылка;
namespace V82.ДокументыОбъект
{
	///<summary>
	///(Упр)
	///</summary>
	[ProtoContract]
	[DataContract]
	public partial class ПланПроизводства:ДокументОбъект
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
		public DateTime Дата {get;set;}
		[DataMember]
		[ProtoMember(6)]
		public DateTime ПрефиксНомера {get;set;}
		[DataMember]
		[ProtoMember(7)]
		public string/*11*/ Номер {get;set;}
		[DataMember]
		[ProtoMember(8)]
		public bool Проведен {get;set;}
		[DataMember]
		[ProtoMember(9)]
		public V82.СправочникиСсылка.Валюты ВалютаДокумента {get;set;}//Валюта документа
		[DataMember]
		[ProtoMember(10)]
		public DateTime ДатаПланирования {get;set;}//Дата планирования
		///<summary>
		///Любая дополнительная информация
		///</summary>
		[DataMember]
		[ProtoMember(11)]
		public string/*(0)*/ Комментарий {get;set;}
		[DataMember]
		[ProtoMember(12)]
		public decimal/*(10)*/ КратностьДокумента {get;set;}//Кратность документа
		[DataMember]
		[ProtoMember(13)]
		public decimal/*(10.4)*/ КурсДокумента {get;set;}//Курс документа
		[DataMember]
		[ProtoMember(14)]
		public V82.СправочникиСсылка.Пользователи Ответственный {get;set;}
		[DataMember]
		[ProtoMember(15)]
		public V82.СправочникиСсылка.Подразделения Подразделение {get;set;}
		[DataMember]
		[ProtoMember(16)]
		public V82.СправочникиСсылка.Проекты Проект {get;set;}
		[DataMember]
		[ProtoMember(17)]
		public V82.СправочникиСсылка.СценарииПланирования Сценарий {get;set;}
		///<summary>
		///Сумма в валюте документа, налоги включены согласно флагам
		///</summary>
		[DataMember]
		[ProtoMember(18)]
		public decimal/*(15.2)*/ СуммаДокумента {get;set;}//Сумма документа
		[DataMember]
		[ProtoMember(19)]
		public ХранилищеЗначения НастройкиПомощникаПланирования {get;set;}//Настройки помощника планирования
		[DataMember]
		[ProtoMember(20)]
		public V82.СправочникиСсылка.ТипыЦенНоменклатуры ТипЦен {get;set;}//Тип цен
		[DataMember]
		[ProtoMember(21)]
		public bool СуммаВключаетНДС {get;set;}//Сумма включает НДС
		[DataMember]
		[ProtoMember(22)]
		public bool УчитыватьНДС {get;set;}//Учитывать НДС
		[DataMember]
		[ProtoMember(23)]
		public V82.Перечисления/*Ссылка*/.Периодичность ПериодичностьДетализации {get;set;}//Периодичность детализации
		public void Записать()
		{
			//Установка блокировки элемента на горизантально масштабированный кластер.
			//Опционально введение тайм аута на запись одного и того же объекта, не чаще раза в 5-секунд. Защита от спама. упращение алгоритма блокировки.
			//Выделение сервиса для блокировки элемента и генерации кода
			//Выполнение операций контроля без обращений к sql-серверу.
			//Контроль конфликта блокировок.
			//Контроль загрузки булкинсертом гетерогенной коллекции.
			//Контроль уникальности кода для Документов.
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
						Insert Into _Document386(
						_IDRRef
						/*,_Version*/
						,_Marked
						,_IsMetadata
						,_Number
						,_Fld8438RRef
						,_Fld8439
						,_Fld8440
						,_Fld8441
						,_Fld8442
						,_Fld8443RRef
						,_Fld8444RRef
						,_Fld8445RRef
						,_Fld8446RRef
						,_Fld8447
						,_Fld8448
						,_Fld8449RRef
						,_Fld8450
						,_Fld8451
						,_Fld8452RRef)
						Values(
						@Ссылка
						/*,@Версия*/
						,@ПометкаУдаления
						,@Номер
						,@ВалютаДокумента
						,@ДатаПланирования
						,@Комментарий
						,@КратностьДокумента
						,@КурсДокумента
						,@Ответственный
						,@Подразделение
						,@Проект
						,@Сценарий
						,@СуммаДокумента
						,@НастройкиПомощникаПланирования
						,@ТипЦен
						,@СуммаВключаетНДС
						,@УчитыватьНДС
						,@ПериодичностьДетализации)";
					}
					else
					{
						Команда.CommandText = @"
						Update _Document386
						Set
						/*_IDRRef	= @Ссылка*/
						/*,_Version	= @Версия*/
						_Marked	= @ПометкаУдаления
						,_Number	= @Номер
						,_Fld8438RRef	= @ВалютаДокумента
						,_Fld8439	= @ДатаПланирования
						,_Fld8440	= @Комментарий
						,_Fld8441	= @КратностьДокумента
						,_Fld8442	= @КурсДокумента
						,_Fld8443RRef	= @Ответственный
						,_Fld8444RRef	= @Подразделение
						,_Fld8445RRef	= @Проект
						,_Fld8446RRef	= @Сценарий
						,_Fld8447	= @СуммаДокумента
						,_Fld8448	= @НастройкиПомощникаПланирования
						,_Fld8449RRef	= @ТипЦен
						,_Fld8450	= @СуммаВключаетНДС
						,_Fld8451	= @УчитыватьНДС
						,_Fld8452RRef	= @ПериодичностьДетализации
						Where _IDRRef = @Ссылка";
					}
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					/*Команда.Parameters.AddWithValue("Версия", Версия);*/
					Команда.Parameters.AddWithValue("ПометкаУдаления", ПометкаУдаления);
					Команда.Parameters.AddWithValue("Номер", Номер);
					Команда.Parameters.AddWithValue("ДатаПланирования", ДатаПланирования);
					Команда.Parameters.AddWithValue("Комментарий", Комментарий);
					Команда.Parameters.AddWithValue("КратностьДокумента", КратностьДокумента);
					Команда.Parameters.AddWithValue("КурсДокумента", КурсДокумента);
					Команда.Parameters.AddWithValue("СуммаДокумента", СуммаДокумента);
					Команда.Parameters.AddWithValue("НастройкиПомощникаПланирования",new byte[0]);
					Команда.Parameters.AddWithValue("СуммаВключаетНДС", СуммаВключаетНДС);
					Команда.Parameters.AddWithValue("УчитыватьНДС", УчитыватьНДС);
					Команда.Parameters.AddWithValue("ПериодичностьДетализации", ПериодичностьДетализации.Ключ());
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
					Команда.CommandText = @"Delete _Document386
					Where _IDRRef=@Ссылка";
					Команда.Parameters.AddWithValue("Ссылка", Ссылка.ToByteArray());
					Команда.ExecuteNonQuery();
				}
			}
		}
	}
}