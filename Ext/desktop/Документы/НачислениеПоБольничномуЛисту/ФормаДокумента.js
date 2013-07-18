Ext.require(['Данные.Документы.НачислениеПоБольничномуЛисту'], function () 
{
	Ext.define('Документы.НачислениеПоБольничномуЛисту.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:945px;height:580px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Начисление по больничному листу',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер документа:',
			style: 'position:absolute;left:643px;top:33px;width:98px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Номер',
			width: 88,
			height: 19,
			style: 'position:absolute;left:743px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:831px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Дата',
			width: 88,
			height: 19,
			style: 'position:absolute;left:851px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:339px;top:56px;width:98px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Организация',
			width: 186,
			height: 19,
			style: 'position:absolute;left:442px;top:56px;width:186px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:643px;top:56px;width:98px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Ответственный',
			width: 196,
			height: 19,
			style: 'position:absolute;left:743px;top:56px;width:196px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:945px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериод',
			text: 'Месяц начисления:',
			style: 'position:absolute;left:339px;top:33px;width:101px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПериодРегистрации',
			width: 186,
			height: 19,
			style: 'position:absolute;left:442px;top:33px;width:186px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРаботник',
			text: 'Сотрудник:',
			style: 'position:absolute;left:8px;top:79px;width:101px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Сотрудник',
			width: 186,
			height: 19,
			style: 'position:absolute;left:139px;top:79px;width:186px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ПервичныйБольничныйЛист',
			width: 186,
			height: 19,
			style: 'position:absolute;left:139px;top:33px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерВходящего',
			width: 88,
			height: 19,
			style: 'position:absolute;left:237px;top:56px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВходящийСерия',
			text: 'Входящие серия:',
			style: 'position:absolute;left:8px;top:56px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СерияВходящего',
			width: 55,
			height: 19,
			style: 'position:absolute;left:139px;top:56px;width:55px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВходящийНомер',
			text: 'номер:',
			style: 'position:absolute;left:196px;top:56px;width:39px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБольничныйЛист1',
			text: '',
			style: 'position:absolute;left:12px;top:469px;width:176px;height:42px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБольничныйЛист',
			text: '',
			style: 'position:absolute;left:12px;top:469px;width:176px;height:42px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОборотБольничного1',
			text: '',
			style: 'position:absolute;left:197px;top:469px;width:176px;height:42px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:98px;width:931px;height:373px;',
			height: 373,width: 931,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Условия',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:0px;top:346px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 841,
			height: 19,
			style: 'position:absolute;left:90px;top:346px;width:841px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПричинаНетрудоспособности',
			text: 'Причина нетрудоспособности:',
			style: 'position:absolute;left:0px;top:13px;width:159px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ПричинаНетрудоспособности',
			width: 220,
			height: 19,
			style: 'position:absolute;left:177px;top:13px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ПричинаНетрудоспособностиСтрока',
			text: 'ПричинаНетрудоспособностиСтрока',
			style: 'position:absolute;left:0px;top:230px;width:931px;height:34px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСлучайУходаЗаБольнымРебенком',
			text: 'В случае ухода за ребенком:',
			style: 'position:absolute;left:401px;top:13px;width:149px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'СлучайУходаЗаБольнымРебенком',
			width: 220,
			height: 19,
			style: 'position:absolute;left:552px;top:13px;width:220px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачала',
			width: 88,
			height: 19,
			style: 'position:absolute;left:177px;top:63px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОкончания',
			text: 'по:',
			style: 'position:absolute;left:270px;top:63px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончания',
			width: 88,
			height: 19,
			style: 'position:absolute;left:288px;top:63px;width:88px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ДнейОплаты',
			style: 'position:absolute;left:654px;top:63px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДней',
			text: 'дней',
			style: 'position:absolute;left:698px;top:63px;width:29px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНарушенияРежима',
			text: 'Снизить пособие за нарушение режима с:',
			style: 'position:absolute;left:410px;top:113px;width:217px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНарушенияРежима',
			width: 88,
			height: 19,
			style: 'position:absolute;left:629px;top:113px;width:88px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьВсе',
			text: '',
			style: 'position:absolute;left:0px;top:270px;width:82px;height:71px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРазмерПособия',
			text: 'Начислено:',
			style: 'position:absolute;left:106px;top:270px;width:270px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ЗначениеРазмерПособия',
			text: '',
			style: 'position:absolute;left:106px;top:285px;width:270px;height:27px;',
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьРазмерПособия',
			text: '',
			style: 'position:absolute;left:106px;top:312px;width:270px;height:29px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСреднийЗаработок',
			text: 'Средний дневной заработок:',
			style: 'position:absolute;left:392px;top:270px;width:238px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'ЗначениеСреднийЗаработок',
			text: '',
			style: 'position:absolute;left:392px;top:285px;width:238px;height:17px;',
		},
		{
			xtype: 'label',
			name: 'ИнформационнаяНадписьСреднийЗаработок',
			text: '',
			style: 'position:absolute;left:392px;top:302px;width:238px;height:39px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтражениеПособияВУчете',
			text: 'Отражение пособия в учете:',
			style: 'position:absolute;left:648px;top:270px;width:152px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала',
			text: 'Дата начала нетрудоспособности:',
			style: 'position:absolute;left:0px;top:38px;width:175px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаСобытия',
			width: 88,
			height: 19,
			style: 'position:absolute;left:177px;top:38px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНачала2',
			text: 'Освобождение от работы с:',
			style: 'position:absolute;left:0px;top:63px;width:146px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНачалаОплаты',
			width: 88,
			height: 19,
			style: 'position:absolute;left:541px;top:63px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'за',
			style: 'position:absolute;left:635px;top:63px;width:16px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказДополнительныхДанных',
			text: 'Показать дополнительные данные',
			style: 'position:absolute;left:409px;top:206px;width:183px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Доплачивать до полного среднего заработка',
			style: 'position:absolute;left:410px;top:138px;width:274px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПоказЛьготныхДанных',
			text: 'Показать дополнительные данные',
			style: 'position:absolute;left:409px;top:185px;width:183px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:88px;width:772px;height:20px;',
			height: 20,width: 772,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница обычный расчет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПроцентОплаты',
			text: 'Процент оплаты от заработка:',
			style: 'position:absolute;left:178px;top:0px;width:160px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОплаты',
			style: 'position:absolute;left:341px;top:0px;width:57px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОграничениеПособия',
			text: 'Ограничение заработка (пособия):',
			style: 'position:absolute;left:410px;top:0px;width:178px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ОграничениеПособия',
			width: 183,
			height: 19,
			style: 'position:absolute;left:589px;top:0px;width:183px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтажЛет',
			text: 'Стаж: лет',
			style: 'position:absolute;left:0px;top:0px;width:53px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтажЛет',
			style: 'position:absolute;left:53px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись24',
			text: 'месяцев',
			style: 'position:absolute;left:90px;top:0px;width:47px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтажМесяцев',
			style: 'position:absolute;left:140px;top:0px;width:32px;height:19px;',
		},
					]
				},
				{
					title:'Страница особый расчет',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПроцентОплаты1',
			text: 'Процент оплаты от заработка:',
			style: 'position:absolute;left:184px;top:0px;width:162px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПроцентОплаты1',
			style: 'position:absolute;left:344px;top:0px;width:57px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОграничениеПособия1',
			text: 'Ограничение заработка (пособия):',
			style: 'position:absolute;left:410px;top:0px;width:178px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ОграничениеПособия1',
			width: 183,
			height: 19,
			style: 'position:absolute;left:589px;top:0px;width:183px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтажЛет1',
			text: 'Стаж: лет',
			style: 'position:absolute;left:0px;top:0px;width:53px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтажЛет1',
			style: 'position:absolute;left:53px;top:0px;width:32px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись25',
			text: 'месяцев',
			style: 'position:absolute;left:90px;top:0px;width:47px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СтажМесяцев1',
			style: 'position:absolute;left:140px;top:0px;width:32px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Учитывать заработок предыдущих страхователей',
			style: 'position:absolute;left:0px;top:138px;width:274px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Назначить пособие с:',
			style: 'position:absolute;left:410px;top:63px;width:129px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Рассчитывать заработок по правилам 2010 года',
			style: 'position:absolute;left:0px;top:162px;width:274px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись23',
			text: 'Условия исчисления:',
			style: 'position:absolute;left:0px;top:113px;width:112px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УсловияИсчисленияКод1',
			width: 40,
			height: 19,
			style: 'position:absolute;left:129px;top:113px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УсловияИсчисленияКод2',
			width: 40,
			height: 19,
			style: 'position:absolute;left:177px;top:113px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'УсловияИсчисленияКод3',
			width: 40,
			height: 19,
			style: 'position:absolute;left:225px;top:113px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодПричиныПерерасчета',
			text: 'Код причины перерасчета:',
			style: 'position:absolute;left:410px;top:162px;width:141px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодПричиныПерерасчета',
			width: 40,
			height: 19,
			style: 'position:absolute;left:552px;top:162px;width:40px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать новый порядок расчета пособия по беременности',
			style: 'position:absolute;left:0px;top:186px;width:355px;height:19px;',
		},
					]
				},
				{
					title:'Оборот больничного',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:6px;width:931px;height:359px;',
			height: 359,width: 931,
			items:
			[
				{
					title:'Оплата',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:81px;width:917px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Рассчитать с комментарием',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОплата',
			text: '',
			style: 'position:absolute;left:6px;top:305px;width:917px;height:29px;',
		},
		{
			id: 'Начисления',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:105px;width:917px;height:194px;',
			height: 194,width: 917,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'Картинка',
					flex:1,
				},
				{
					text:'',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Рабочее место',
					width:'117',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'',
					width:'58',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'',
					width:'58',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'83',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'83',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'Начисление',
					width:'144',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Показатели для расчета',
					width:'133',
					dataIndex:'Показатели',
					flex:1,
				},
				{
					text:'Показатель',
					width:'67',
					dataIndex:'НаименованиеПоказатель1',
					flex:1,
				},
				{
					text:'Размер',
					width:'50',
					dataIndex:'Показатель1',
					flex:1,
				},
				{
					text:'Показатель',
					width:'67',
					dataIndex:'НаименованиеПоказатель2',
					flex:1,
				},
				{
					text:'Размер 2',
					width:'50',
					dataIndex:'Показатель2',
					flex:1,
				},
				{
					text:'Показатель',
					width:'67',
					dataIndex:'НаименованиеПоказатель3',
					flex:1,
				},
				{
					text:'Размер 3',
					width:'50',
					dataIndex:'Показатель3',
					flex:1,
				},
				{
					text:'Показатель',
					width:'67',
					dataIndex:'НаименованиеПоказатель4',
					flex:1,
				},
				{
					text:'Размер 4',
					width:'50',
					dataIndex:'Показатель4',
					flex:1,
				},
				{
					text:'Показатель',
					width:'67',
					dataIndex:'НаименованиеПоказатель5',
					flex:1,
				},
				{
					text:'Размер 5',
					width:'50',
					dataIndex:'Показатель5',
					flex:1,
				},
				{
					text:'Показатель',
					width:'67',
					dataIndex:'НаименованиеПоказатель6',
					flex:1,
				},
				{
					text:'Размер 6',
					width:'50',
					dataIndex:'Показатель6',
					flex:1,
				},
				{
					text:'Результат',
					width:'62',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'В т.ч. за счет федерального бюджета',
					width:'65',
					dataIndex:'ДополнительныйРезультат',
					flex:1,
				},
				{
					text:'Оплачено дней/часов',
					width:'83',
					dataIndex:'ОплаченоДнейЧасов',
					flex:1,
				},
				{
					text:'Зачесть в норму дней',
					width:'80',
					dataIndex:'НормаДней',
					flex:1,
				},
				{
					text:'Зачесть в норму часов',
					width:'80',
					dataIndex:'НормаЧасов',
					flex:1,
				},
				{
					text:'Дней отработано',
					width:'80',
					dataIndex:'ОтработаноДней',
					flex:1,
				},
				{
					text:'Часов отработано',
					width:'80',
					dataIndex:'ОтработаноЧасов',
					flex:1,
				},
				{
					text:'Подразделение организации',
					width:'60',
					dataIndex:'ПодразделениеОрганизации',
					flex:1,
				},
				{
					text:'Дата начала события',
					width:'60',
					dataIndex:'ДатаНачалаСобытия',
					flex:1,
				},
				{
					text:'Сторно',
					width:'40',
					dataIndex:'Сторно',
					flex:1,
				},
				{
					text:'Норма дней по пятидневке',
					width:'100',
					dataIndex:'НормаДнейПоПятидневке',
					flex:1,
				},
				{
					text:'Отработано дней по пятидневке',
					width:'100',
					dataIndex:'ОтработаноДнейПоПятидневке',
					flex:1,
				},
				{
					text:'Норма часов по пятидневке',
					width:'80',
					dataIndex:'НормаЧасовПоПятидневке',
					flex:1,
				},
				{
					text:'Отработано часов по пятидневке',
					width:'80',
					dataIndex:'ОтработаноЧасовПоПятидневке',
					flex:1,
				},
				{
					text:'Начало расчетного периода',
					width:'66',
					dataIndex:'ПериодРасчетаСреднегоЗаработкаНачало',
					flex:1,
				},
				{
					text:'Окончание расчетного периода',
					width:'100',
					dataIndex:'ПериодРасчетаСреднегоЗаработкаОкончание',
					flex:1,
				},
				{
					text:'Сторнируемый документ',
					width:'100',
					dataIndex:'СторнируемыйДокумент',
					flex:1,
				},
				{
					text:'Число месяцев',
					width:'100',
					dataIndex:'ЧислоМесяцев',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НачислениеПоБольничномуЛисту/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'Картинка',
					},
					{
						name:'НомерСтроки',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Должность',
					},
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'Показатели',
					},
					{
						name:'НаименованиеПоказатель1',
					},
					{
						name:'Показатель1',
					},
					{
						name:'НаименованиеПоказатель2',
					},
					{
						name:'Показатель2',
					},
					{
						name:'НаименованиеПоказатель3',
					},
					{
						name:'Показатель3',
					},
					{
						name:'НаименованиеПоказатель4',
					},
					{
						name:'Показатель4',
					},
					{
						name:'НаименованиеПоказатель5',
					},
					{
						name:'Показатель5',
					},
					{
						name:'НаименованиеПоказатель6',
					},
					{
						name:'Показатель6',
					},
					{
						name:'Результат',
					},
					{
						name:'ДополнительныйРезультат',
					},
					{
						name:'ОплаченоДнейЧасов',
					},
					{
						name:'НормаДней',
					},
					{
						name:'НормаЧасов',
					},
					{
						name:'ОтработаноДней',
					},
					{
						name:'ОтработаноЧасов',
					},
					{
						name:'ПодразделениеОрганизации',
					},
					{
						name:'ДатаНачалаСобытия',
					},
					{
						name:'Сторно',
					},
					{
						name:'НормаДнейПоПятидневке',
					},
					{
						name:'ОтработаноДнейПоПятидневке',
					},
					{
						name:'НормаЧасовПоПятидневке',
					},
					{
						name:'ОтработаноЧасовПоПятидневке',
					},
					{
						name:'ПериодРасчетаСреднегоЗаработкаНачало',
					},
					{
						name:'ПериодРасчетаСреднегоЗаработкаОкончание',
					},
					{
						name:'СторнируемыйДокумент',
					},
					{
						name:'ЧислоМесяцев',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('Начисления');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НачислениеПоБольничномуЛисту.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НачислениеПоБольничномуЛисту.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:119px;width:629px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Отбор по значению в текущей колонке',
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
					]
				},
				{
					text:'Отключить отбор',
				},
				'-',
				{
					text:'Вывести список...',
				},
				{
					text:'Настройка списка...',
				},
			]
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВидРасчета',
			width: 210,
			height: 19,
			style: 'position:absolute;left:132px;top:28px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРасчета',
			text: 'Для пособия ФСС:',
			style: 'position:absolute;left:14px;top:28px;width:116px;height:19px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:360px;top:28px;width:285px;height:19px;',
			height: 19,width: 285,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВидРасчетаДоплаты',
			width: 210,
			height: 19,
			style: 'position:absolute;left:75px;top:0px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРасчетаДоплаты',
			text: 'Для доплаты:',
			style: 'position:absolute;left:0px;top:0px;width:75px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'fieldset',
			title: 'При расчете использовать начисления:',
			style: 'position:absolute;left:6px;top:6px;width:917px;height:16px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:47px;width:917px;height:25px;',
			height: 25,width: 917,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВидРасчетаЗаСчетРаботодателя',
			width: 210,
			height: 19,
			style: 'position:absolute;left:126px;top:6px;width:210px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидРасчетаЗаСчетРаботодателя',
			text: 'За счет работодателя:',
			style: 'position:absolute;left:8px;top:6px;width:115px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДнейОплатыРаботодателем',
			text: 'Оплачиваемых дней:',
			style: 'position:absolute;left:355px;top:6px;width:112px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ДнейОплатыРаботодателем',
			style: 'position:absolute;left:467px;top:6px;width:36px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Расчет среднего заработка',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьРасчетСреднегоЗаработка',
			text: '',
			style: 'position:absolute;left:146px;top:295px;width:777px;height:39px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаРассчитатьНачисления',
			text: 'Рассчитать начисления',
			style: 'position:absolute;left:6px;top:295px;width:130px;height:39px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:0px;width:917px;height:289px;',
			height: 289,width: 917,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница до 2011 года',
					items:
					[
		{
			id: 'РасчетСреднего',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:75px;width:917px;height:214px;',
			height: 214,width: 917,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Рабочее место',
					width:'120',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'',
					width:'60',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'',
					width:'60',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Вид заработка',
					width:'120',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'Дней отработано',
					width:'100',
					dataIndex:'ОтработаноДней',
					flex:1,
				},
				{
					text:'Скидка',
					width:'80',
					dataIndex:'СкидкаПоСтраховымВзносам',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'100',
					dataIndex:'БазовыйПериодНачало',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'100',
					dataIndex:'БазовыйПериодКонец',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НачислениеПоБольничномуЛисту/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Должность',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'Результат',
					},
					{
						name:'ОтработаноДней',
					},
					{
						name:'СкидкаПоСтраховымВзносам',
					},
					{
						name:'БазовыйПериодНачало',
					},
					{
						name:'БазовыйПериодКонец',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('РасчетСреднего');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НачислениеПоБольничномуЛисту.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НачислениеПоБольничномуЛисту.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодРасчетаСреднегоЗаработкаНачало',
			width: 90,
			height: 19,
			style: 'position:absolute;left:117px;top:8px;width:90px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодРасчетаСреднегоЗаработкаОкончание',
			width: 90,
			height: 19,
			style: 'position:absolute;left:233px;top:8px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаНачало',
			text: 'Расчетный период с:',
			style: 'position:absolute;left:0px;top:8px;width:109px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаОкончание',
			text: 'по',
			style: 'position:absolute;left:212px;top:8px;width:16px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Заработок за расчетный период',
			style: 'position:absolute;left:0px;top:33px;width:917px;height:16px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:330px;top:8px;width:20px;height:19px;',
		},
					]
				},
				{
					title:'Страница с 2011 года',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Заработок за расчетные годы',
			style: 'position:absolute;left:0px;top:33px;width:917px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетныеГоды',
			text: 'Расчетные годы:',
			style: 'position:absolute;left:0px;top:8px;width:88px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПервыйГодРасчета',
			style: 'position:absolute;left:93px;top:8px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИ',
			text: ' и ',
			style: 'position:absolute;left:161px;top:8px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВторойГодРасчета',
			style: 'position:absolute;left:183px;top:8px;width:64px;height:19px;',
		},
		{
			id: 'РасчетСреднего2011',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:74px;width:917px;height:215px;',
			height: 215,width: 917,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Расчетный год',
					width:'100',
					dataIndex:'РасчетныйГод',
					flex:1,
				},
				{
					text:'Заработок',
					width:'100',
					dataIndex:'Заработок',
					flex:1,
				},
				{
					text:'Дней болезни, ухода за детьми и др.',
					width:'200',
					dataIndex:'ДнейБолезниУходаЗаДетьми',
					flex:1,
				},
				{
					text:'Страхователь',
					width:'100',
					dataIndex:'Страхователь',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НачислениеПоБольничномуЛисту/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'РасчетныйГод',
					},
					{
						name:'Заработок',
					},
					{
						name:'ДнейБолезниУходаЗаДетьми',
					},
					{
						name:'Страхователь',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('РасчетСреднего2011');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НачислениеПоБольничномуЛисту.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НачислениеПоБольничномуЛисту.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
					]
				},
				{
					title:'Страница переходного периода',
					items:
					[
		{
			xtype: 'fieldset',
			title: 'Заработок за расчетные годы',
			style: 'position:absolute;left:0px;top:187px;width:917px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасчетныеГоды1',
			text: 'Расчетные годы:',
			style: 'position:absolute;left:0px;top:165px;width:88px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПервыйГодРасчета1',
			style: 'position:absolute;left:93px;top:165px;width:64px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИ1',
			text: ' и ',
			style: 'position:absolute;left:161px;top:165px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВторойГодРасчета1',
			style: 'position:absolute;left:183px;top:165px;width:64px;height:19px;',
		},
		{
			id: 'РасчетСреднего2011_ПП',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:230px;width:917px;height:59px;',
			height: 59,width: 917,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Расчетный год',
					width:'100',
					dataIndex:'РасчетныйГод',
					flex:1,
				},
				{
					text:'Заработок',
					width:'100',
					dataIndex:'Заработок',
					flex:1,
				},
				{
					text:'Страхователь',
					width:'100',
					dataIndex:'Страхователь',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НачислениеПоБольничномуЛисту/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'РасчетныйГод',
					},
					{
						name:'Заработок',
					},
					{
						name:'Страхователь',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('РасчетСреднего2011_ПП');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НачислениеПоБольничномуЛисту.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НачислениеПоБольничномуЛисту.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:205px;width:917px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Рассчитать заработок',
				},
			]
		},
		{
			id: 'РасчетСреднего2010_ПП',
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:67px;width:917px;height:87px;',
			height: 87,width: 917,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Рабочее место',
					width:'120',
					dataIndex:'Сотрудник',
					flex:1,
				},
				{
					text:'',
					width:'60',
					dataIndex:'Подразделение',
					flex:1,
				},
				{
					text:'',
					width:'60',
					dataIndex:'Должность',
					flex:1,
				},
				{
					text:'Вид заработка',
					width:'120',
					dataIndex:'ВидРасчета',
					flex:1,
				},
				{
					text:'Сумма',
					width:'80',
					dataIndex:'Результат',
					flex:1,
				},
				{
					text:'Дней отработано',
					width:'100',
					dataIndex:'ОтработаноДней',
					flex:1,
				},
				{
					text:'Скидка',
					width:'80',
					dataIndex:'СкидкаПоСтраховымВзносам',
					flex:1,
				},
				{
					text:'Дата начала',
					width:'100',
					dataIndex:'БазовыйПериодНачало',
					flex:1,
				},
				{
					text:'Дата окончания',
					width:'100',
					dataIndex:'БазовыйПериодКонец',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НачислениеПоБольничномуЛисту/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'Сотрудник',
					},
					{
						name:'Подразделение',
					},
					{
						name:'Должность',
					},
					{
						name:'ВидРасчета',
					},
					{
						name:'Результат',
					},
					{
						name:'ОтработаноДней',
					},
					{
						name:'СкидкаПоСтраховымВзносам',
					},
					{
						name:'БазовыйПериодНачало',
					},
					{
						name:'БазовыйПериодКонец',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('РасчетСреднего2010_ПП');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НачислениеПоБольничномуЛисту.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НачислениеПоБольничномуЛисту.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодРасчетаСреднегоЗаработкаНачало1',
			width: 90,
			height: 19,
			style: 'position:absolute;left:117px;top:2px;width:90px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодРасчетаСреднегоЗаработкаОкончание1',
			width: 90,
			height: 19,
			style: 'position:absolute;left:233px;top:2px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаНачало1',
			text: 'Расчетный период с:',
			style: 'position:absolute;left:0px;top:2px;width:109px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодРасчетаСреднегоЗаработкаОкончание1',
			text: 'по',
			style: 'position:absolute;left:212px;top:2px;width:16px;height:19px;',
		},
		{
			xtype: 'fieldset',
			title: 'Заработок за расчетный период',
			style: 'position:absolute;left:0px;top:25px;width:917px;height:16px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода1',
			text: '...',
			style: 'position:absolute;left:330px;top:2px;width:20px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
					]
				},
				{
					title:'Заявление в ФСС',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:6px;width:931px;height:359px;',
			height: 359,width: 931,
			items:
			[
				{
					title:'Заявление',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаОбновитьДанныеСотрудника',
			text: 'Обновить',
			style: 'position:absolute;left:762px;top:262px;width:161px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПечатьЗаявление',
			text: 'Заявление',
			style: 'position:absolute;left:762px;top:287px;width:161px;height:21px;',
		},
		{
			xtype: 'button',
			name: 'ПечатьСправка',
			text: 'Справка к старому б/л',
			style: 'position:absolute;left:762px;top:312px;width:161px;height:21px;',
		},
		{
			xtype: 'label',
			name: 'НадписьФамилия',
			text: 'Фамилия:',
			style: 'position:absolute;left:6px;top:6px;width:55px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Фамилия',
			width: 160,
			height: 19,
			style: 'position:absolute;left:65px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьИмя',
			text: 'Имя:',
			style: 'position:absolute;left:232px;top:6px;width:32px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Имя',
			width: 160,
			height: 19,
			style: 'position:absolute;left:268px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтчество',
			text: 'Отчество:',
			style: 'position:absolute;left:430px;top:6px;width:54px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Отчество',
			width: 160,
			height: 19,
			style: 'position:absolute;left:485px;top:6px;width:160px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента',
			text: 'Вид документа:',
			style: 'position:absolute;left:14px;top:50px;width:85px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'ВидДокумента',
			width: 242,
			height: 19,
			style: 'position:absolute;left:103px;top:50px;width:242px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерияДокумента',
			text: 'Серия:',
			style: 'position:absolute;left:351px;top:50px;width:37px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'СерияДокумента',
			width: 88,
			height: 19,
			style: 'position:absolute;left:390px;top:50px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерДокумента',
			text: 'Номер:',
			style: 'position:absolute;left:486px;top:50px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерДокумента',
			width: 88,
			height: 19,
			style: 'position:absolute;left:528px;top:50px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись15',
			text: 'Паспортные данные',
			style: 'position:absolute;left:6px;top:27px;width:129px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресПочтовыйВФорме',
			width: 500,
			height: 19,
			style: 'position:absolute;left:203px;top:180px;width:500px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаВыдачиДокумента',
			width: 88,
			height: 19,
			style: 'position:absolute;left:664px;top:50px;width:88px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаДействияДокумента',
			width: 88,
			height: 19,
			style: 'position:absolute;left:835px;top:50px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиДокумента',
			text: 'Выдан:',
			style: 'position:absolute;left:621px;top:50px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиДокумента1',
			text: 'Действует до:',
			style: 'position:absolute;left:757px;top:50px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодПростояС',
			text: 'Простой с:',
			style: 'position:absolute;left:14px;top:291px;width:59px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодПростояС',
			width: 88,
			height: 19,
			style: 'position:absolute;left:74px;top:291px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодПростояПо',
			text: 'по:',
			style: 'position:absolute;left:165px;top:291px;width:21px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодПростояПо',
			width: 88,
			height: 19,
			style: 'position:absolute;left:188px;top:291px;width:88px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-search-trigger',
			name: 'Банк',
			width: 348,
			height: 19,
			style: 'position:absolute;left:203px;top:136px;width:348px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерЛицевогоСчета',
			text: '№ счета:',
			style: 'position:absolute;left:559px;top:136px;width:49px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерЛицевогоСчета',
			width: 156,
			height: 19,
			style: 'position:absolute;left:608px;top:136px;width:156px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеБанка',
			text: 'Наименование банка:',
			style: 'position:absolute;left:14px;top:158px;width:114px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеБанка',
			width: 458,
			height: 19,
			style: 'position:absolute;left:132px;top:158px;width:458px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБИКБанка',
			text: 'БИК:',
			style: 'position:absolute;left:804px;top:158px;width:29px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'БИКБанка',
			width: 88,
			height: 19,
			style: 'position:absolute;left:835px;top:158px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись16',
			text: 'Пособие выплатить',
			style: 'position:absolute;left:6px;top:114px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись17',
			text: 'Прочее',
			style: 'position:absolute;left:6px;top:202px;width:74px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Пособие по беременности и родам рассчитывается из оклада (тарифной ставки)',
			style: 'position:absolute;left:14px;top:246px;width:435px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Поставлена на учет в ранние сроки беременности, дата справки:',
			style: 'position:absolute;left:14px;top:268px;width:352px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДолжностьУполномоченного',
			text: 'Должность:',
			style: 'position:absolute;left:325px;top:314px;width:62px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'ДолжностьУполномоченного',
			width: 132,
			height: 19,
			style: 'position:absolute;left:389px;top:314px;width:132px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУполномоченный',
			text: 'Уполномоченный страхователя:',
			style: 'position:absolute;left:14px;top:314px;width:166px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			trigger3Cls: 'x-form-search-trigger',
			name: 'Уполномоченный',
			width: 132,
			height: 19,
			style: 'position:absolute;left:182px;top:314px;width:132px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаСправкиБеременной',
			width: 88,
			height: 19,
			style: 'position:absolute;left:368px;top:268px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКемВыданДокумент',
			text: 'Кем выдан:',
			style: 'position:absolute;left:13px;top:72px;width:60px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КемВыданДокумент',
			width: 371,
			height: 19,
			style: 'position:absolute;left:74px;top:72px;width:371px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерСправкиБеременной',
			width: 88,
			height: 19,
			style: 'position:absolute;left:502px;top:268px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСправкиБеременной',
			text: 'номер:',
			style: 'position:absolute;left:460px;top:268px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоррСчет',
			text: 'Корр. счет:',
			style: 'position:absolute;left:597px;top:158px;width:58px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КоррСчет',
			width: 136,
			height: 19,
			style: 'position:absolute;left:659px;top:158px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидДокумента1',
			text: 'Для иностранных граждан:',
			style: 'position:absolute;left:450px;top:72px;width:141px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОписаниеДокументаНаПроживание',
			width: 329,
			height: 19,
			style: 'position:absolute;left:594px;top:72px;width:329px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресРегистрации',
			text: 'Адрес по регистрации:',
			style: 'position:absolute;left:14px;top:94px;width:117px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресРегистрацииВФорме',
			width: 401,
			height: 19,
			style: 'position:absolute;left:132px;top:94px;width:401px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон',
			text: 'Телефон:',
			style: 'position:absolute;left:757px;top:94px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Телефон',
			width: 112,
			height: 19,
			style: 'position:absolute;left:811px;top:94px;width:112px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ТарифнаяСтавкаОклад',
			style: 'position:absolute;left:221px;top:225px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСреднедневнойЗаработокНаПериодПростоя',
			text: 'Среднедневной заработок на период простоя:',
			style: 'position:absolute;left:281px;top:291px;width:236px;height:19px;text-align:left;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'СреднедневнойЗаработокНаПериодПростоя',
			style: 'position:absolute;left:518px;top:291px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТарифнаяСтавкаОклад',
			text: 'Должностной оклад (тарифная ставка):',
			style: 'position:absolute;left:14px;top:225px;width:204px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТелефон1',
			text: 'Телефон:',
			style: 'position:absolute;left:530px;top:314px;width:52px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Телефон1',
			width: 84,
			height: 19,
			style: 'position:absolute;left:583px;top:314px;width:84px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресПочтовыйКодПоКЛАДР',
			text: 'Код по КЛАДР:',
			style: 'position:absolute;left:707px;top:180px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресПочтовыйКодПоКЛАДР',
			width: 136,
			height: 19,
			style: 'position:absolute;left:787px;top:180px;width:136px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресРегистрацииКодПоКЛАДР',
			text: 'Код по КЛАДР:',
			style: 'position:absolute;left:536px;top:94px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресРегистрацииКодПоКЛАДР',
			width: 136,
			height: 19,
			style: 'position:absolute;left:616px;top:94px;width:136px;height:19px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Перечислением на счет в банке:',
			style: 'position:absolute;left:14px;top:136px;width:185px;height:19px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Почтовым переводом по адресу:',
			style: 'position:absolute;left:14px;top:180px;width:185px;height:19px;',
		},
			]
		},
					]
				},
				{
					title:'Данные листка нетрудоспособности',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьДатаВыдачиБольничного',
			text: 'Дата выдачи листка нетрудоспособности:',
			style: 'position:absolute;left:6px;top:6px;width:221px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаВыдачиБольничного',
			width: 88,
			height: 19,
			style: 'position:absolute;left:235px;top:6px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение1',
			text: 'Остальные поля этой закладки заполняются только в том случае, когда страхователь будет представлять в территориальный орган ФСС "Реестр сведений, необходимых для назначения и выплаты пособий по временной нетрудоспособности, по беременности и родам ..."',
			style: 'position:absolute;left:27px;top:35px;width:896px;height:28px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодПричиныНетрудоспособности',
			width: 40,
			height: 19,
			style: 'position:absolute;left:188px;top:144px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДополнительныйКодПричиныНетрудоспособности',
			width: 40,
			height: 19,
			style: 'position:absolute;left:283px;top:144px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВторойКодПричиныНетрудоспособности',
			width: 40,
			height: 19,
			style: 'position:absolute;left:382px;top:144px;width:40px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаИзмененияКодаПричиныНетрудоспособности',
			width: 88,
			height: 19,
			style: 'position:absolute;left:50px;top:192px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись18',
			text: 'Причина нетрудоспособности: код',
			style: 'position:absolute;left:6px;top:144px;width:179px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись19',
			text: 'доп. код',
			style: 'position:absolute;left:234px;top:144px;width:43px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись20',
			text: 'код изм.',
			style: 'position:absolute;left:332px;top:144px;width:47px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись21',
			text: 'Дата 1:',
			style: 'position:absolute;left:6px;top:192px;width:42px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьУходЗаБольнымЧленомСемьи',
			text: 'Больные члены семьи, за которыми осуществлялся уход',
			style: 'position:absolute;left:6px;top:218px;width:355px;height:19px;',
		},
		{
			id: 'УходЗаБольнымЧленомСемьи',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:242px;width:917px;height:91px;',
			height: 91,width: 917,
			columns:
			[
				{
					text:'№',
					width:'28',
					dataIndex:'НомерСтроки',
					flex:1,
				},
				{
					text:'Возраст',
					width:'120',
					dataIndex:'КолонкаВозраст',
					flex:1,
				},
				{
					text:'лет',
					width:'60',
					dataIndex:'ВозрастЛет',
					flex:1,
				},
				{
					text:'месяцев',
					width:'60',
					dataIndex:'ВозрастМесяцев',
					flex:1,
				},
				{
					text:'Родственная связь',
					width:'80',
					dataIndex:'РодственнаяСвязь',
					flex:1,
				},
				{
					text:'ФИО',
					width:'270',
					dataIndex:'ФИО',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НачислениеПоБольничномуЛисту/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'НомерСтроки',
					},
					{
						name:'КолонкаВозраст',
					},
					{
						name:'ВозрастЛет',
					},
					{
						name:'ВозрастМесяцев',
					},
					{
						name:'РодственнаяСвязь',
					},
					{
						name:'ФИО',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('УходЗаБольнымЧленомСемьи');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НачислениеПоБольничномуЛисту.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НачислениеПоБольничномуЛисту.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'checkbox',
			boxLabel: 'К оплате предъявлен дубликат листка нетрудоспособности',
			style: 'position:absolute;left:14px;top:68px;width:328px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресЛПУ',
			text: 'Адрес:',
			style: 'position:absolute;left:310px;top:115px;width:37px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресЛПУВФорме',
			width: 220,
			height: 19,
			style: 'position:absolute;left:351px;top:115px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеЛПУ',
			text: 'Наименование:',
			style: 'position:absolute;left:6px;top:115px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеЛПУ',
			width: 215,
			height: 19,
			style: 'position:absolute;left:89px;top:115px;width:215px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОГРН_ЛПУ',
			text: 'ОГРН:',
			style: 'position:absolute;left:795px;top:115px;width:35px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОГРН_ЛПУ',
			width: 92,
			height: 19,
			style: 'position:absolute;left:831px;top:115px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерЛисткаПоОсновномуМестуРаботы',
			text: 'Номер б/л, выданного для основного места работы:',
			style: 'position:absolute;left:6px;top:168px;width:271px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерЛисткаПоОсновномуМестуРаботы',
			width: 139,
			height: 19,
			style: 'position:absolute;left:283px;top:168px;width:139px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись27',
			text: 'Дата 2:',
			style: 'position:absolute;left:143px;top:192px;width:42px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОкончанияПутевки',
			width: 88,
			height: 19,
			style: 'position:absolute;left:188px;top:192px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерПутевки',
			text: 'Номер путевки:',
			style: 'position:absolute;left:283px;top:192px;width:82px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерПутевки',
			width: 79,
			height: 19,
			style: 'position:absolute;left:368px;top:192px;width:79px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОГРН_Санатория',
			text: 'ОГРН санатория:',
			style: 'position:absolute;left:452px;top:192px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОГРН_Санатория',
			width: 101,
			height: 19,
			style: 'position:absolute;left:544px;top:192px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись26',
			text: 'Медицинская организация, выдавшая листок:',
			style: 'position:absolute;left:6px;top:92px;width:240px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАдресЛПУКодПоКЛАДР',
			text: 'Код по КЛАДР:',
			style: 'position:absolute;left:576px;top:115px;width:79px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'АдресЛПУКодПоКЛАДР',
			width: 136,
			height: 19,
			style: 'position:absolute;left:656px;top:115px;width:136px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ЛПУ',
			width: 220,
			height: 19,
			style: 'position:absolute;left:250px;top:92px;width:220px;height:19px;',
		},
					]
				},
				{
					title:'Данные листка нетрудоспособности (продолжение)',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьПериодНахожденияВСтационареСРебенкомС',
			text: 'Находился(ась) в стационаре с ребенком: с',
			style: 'position:absolute;left:6px;top:62px;width:228px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодНахожденияВСтационареСРебенкомС',
			width: 88,
			height: 19,
			style: 'position:absolute;left:238px;top:62px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись22',
			text: 'по',
			style: 'position:absolute;left:332px;top:62px;width:17px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПериодНахожденияВСтационареСРебенкомПо',
			width: 88,
			height: 19,
			style: 'position:absolute;left:355px;top:62px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКодНарушенияРежима',
			text: 'Отметка о нарушении режима: код',
			style: 'position:absolute;left:6px;top:38px;width:180px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КодНарушенияРежима',
			width: 40,
			height: 19,
			style: 'position:absolute;left:188px;top:38px;width:40px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Установлена/изменена группа инвалидности:',
			style: 'position:absolute;left:277px;top:136px;width:253px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаРегистрацииДокументовМСЭ',
			text: 'Дата регистрации документов:',
			style: 'position:absolute;left:277px;top:112px;width:170px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаРегистрацииДокументовМСЭ',
			width: 88,
			height: 19,
			style: 'position:absolute;left:453px;top:112px;width:88px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаВыходаНаРаботу',
			width: 88,
			height: 19,
			style: 'position:absolute;left:133px;top:314px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение2',
			text: 'Поля этой закладки заполняются только в том случае, когда страхователь будет представлять в территориальный орган ФСС "Реестр сведений, необходимых для назначения и выплаты пособий по временной нетрудоспособности, по беременности и родам ..."',
			style: 'position:absolute;left:27px;top:6px;width:896px;height:28px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'Надпись28',
			text: 'Экпертиза инвалидности (МСЭ)',
			style: 'position:absolute;left:6px;top:88px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНомерЛисткаПродолжения',
			text: '№ б/л-продолжения:',
			style: 'position:absolute;left:466px;top:314px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерЛисткаПродолжения',
			width: 170,
			height: 19,
			style: 'position:absolute;left:578px;top:314px;width:170px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНаправленияВБюроМСЭ',
			text: 'Дата направления в бюро МСЭ:',
			style: 'position:absolute;left:14px;top:112px;width:164px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНаправленияВБюроМСЭ',
			width: 88,
			height: 19,
			style: 'position:absolute;left:182px;top:112px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОсвидетельствованияМСЭ',
			text: 'Освидетельствован:',
			style: 'position:absolute;left:14px;top:136px;width:164px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОсвидетельствованияМСЭ',
			width: 88,
			height: 19,
			style: 'position:absolute;left:182px;top:136px;width:88px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись29',
			text: 'Освобождение от работы',
			style: 'position:absolute;left:6px;top:162px;width:228px;height:19px;',
		},
		{
			id: 'ОсвобождениеОтРаботыВЛисткеНетрудоспособности',
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:184px;width:917px;height:121px;',
			height: 121,width: 917,
			columns:
			[
				{
					text:'С какого числа',
					width:'88',
					dataIndex:'ДатаНачала',
					flex:1,
				},
				{
					text:'По какое число',
					width:'88',
					dataIndex:'ДатаОкончания',
					flex:1,
				},
				{
					text:'Должность врача',
					width:'119',
					dataIndex:'ДолжностьВрача',
					flex:1,
				},
				{
					text:'ФИО врача',
					width:'200',
					dataIndex:'ФИОВрача',
					flex:1,
				},
				{
					text:'Идентификационный номер врача',
					width:'147',
					dataIndex:'ИдентификационныйНомерВрача',
					flex:1,
				},
				{
					text:'Должность врача-председателя ВК',
					width:'80',
					dataIndex:'ДолжностьВрачаПредседателяВК',
					flex:1,
				},
				{
					text:'ФИО врача-председателя ВК',
					width:'80',
					dataIndex:'ФИОВрачаПредседателяВК',
					flex:1,
				},
				{
					text:'Идентификационный номер врача-председателя ВК',
					width:'80',
					dataIndex:'ИдентификационныйНомерВрачаПредседателяВК',
					flex:1,
				},
			],
			store:
			{
				autoLoad: true,
				pageSize: 50,
				restful: true,
				autoSync: false,
				proxy: {type: 'jsonp',url: 'https://localhost:1337/Справочники/НачислениеПоБольничномуЛисту/ВыбратьПоСсылке/100', timeout: 3},
				fields:
				[
					{
						name:'ДатаНачала',
					},
					{
						name:'ДатаОкончания',
					},
					{
						name:'ДолжностьВрача',
					},
					{
						name:'ФИОВрача',
					},
					{
						name:'ИдентификационныйНомерВрача',
					},
					{
						name:'ДолжностьВрачаПредседателяВК',
					},
					{
						name:'ФИОВрачаПредседателяВК',
					},
					{
						name:'ИдентификационныйНомерВрачаПредседателяВК',
					},
				]
			},
			listeners:
			{
				dblclick:
				{
					element: 'body',
					fn: function ()
					{
						var грид = Ext.getCmp('ОсвобождениеОтРаботыВЛисткеНетрудоспособности');
						var ссылка = грид.getView().getSelectionModel().getSelection()[0].data;
						Ext.require(['Справочники.НачислениеПоБольничномуЛисту.ФормаДокументаСобытия'], function ()
						{
							var obj = Ext.create("Справочники.НачислениеПоБольничномуЛисту.ФормаДокументаСобытия");
							obj.ПередатьСсылку(ссылка);
						});
					}
				}
			},
		},
		{
			xtype: 'label',
			name: 'НадписьНовыйСтатусНетрудопособного',
			text: 'Иное: код',
			style: 'position:absolute;left:230px;top:314px;width:53px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НовыйСтатусНетрудопособного',
			width: 40,
			height: 19,
			style: 'position:absolute;left:288px;top:314px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаНовыйСтатусНетрудопособного',
			text: 'дата',
			style: 'position:absolute;left:334px;top:314px;width:31px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаВыходаНаРаботу',
			text: 'Приступить к работе с:',
			style: 'position:absolute;left:6px;top:314px;width:122px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаНовыйСтатусНетрудопособного',
			width: 88,
			height: 19,
			style: 'position:absolute;left:370px;top:314px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ГруппаИнвалидности',
			width: 40,
			height: 19,
			style: 'position:absolute;left:533px;top:136px;width:40px;height:19px;',
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПредупреждение',
			text: 'Этот больничный имеет продолжение. Документ был исправлен в Июне 2008 г, редактирование документа запрещено. Документ является исправлением документа прошлого периода.',
			style: 'position:absolute;left:28px;top:515px;width:697px;height:33px;text-align:left;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:726px;top:515px;width:83px;height:33px;',
			height: 33,width: 83,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсправление',
			text: 'Открыть исправление',
			style: 'position:absolute;left:0px;top:0px;width:71px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:810px;top:515px;width:129px;height:33px;',
			height: 33,width: 129,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьОткрытьИсходный',
			text: 'Открыть исправленный документ',
			style: 'position:absolute;left:0px;top:0px;width:129px;height:33px;',
		},
					]
				},
			]
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Продолжение листка',
			style: 'position:absolute;left:8px;top:33px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОборотБольничного',
			text: '',
			style: 'position:absolute;left:197px;top:469px;width:176px;height:42px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаявление1',
			text: '',
			style: 'position:absolute;left:382px;top:469px;width:223px;height:42px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЗаявление',
			text: '',
			style: 'position:absolute;left:382px;top:469px;width:223px;height:42px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:945px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:555px;width:511px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					text:'Исправить',
				},
				{
					text:'Отменить исправление',
				},
			]
		},
	]
	});
});