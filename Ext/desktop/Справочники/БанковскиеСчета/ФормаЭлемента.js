Ext.require(['Данные.Справочники.БанковскиеСчета'], function () 
{
	Ext.define('Справочники.БанковскиеСчета.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:568px;height:521px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Элемент Банковские счета',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:568px;height:25px;',
			width: 568,
			height: 25,
			items:
			[
			]
		},
		{
			xtype: 'label',
			name: 'НадписьНомерСчета',
			text: 'Номер счета:',
			style: 'position:absolute;left:8px;top:35px;width:92px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВидСчета',
			text: 'Вид счета:',
			style: 'position:absolute;left:273px;top:35px;width:57px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВалютаДенежныхСредств',
			text: 'Валюта:',
			style: 'position:absolute;left:447px;top:35px;width:45px;height:15px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ВалютаДенежныхСредств.Представление',
			width: 68,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:492px;top:33px;width:68px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.БанковскиеСчета.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.БанковскиеСчета.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.БанковскиеСчета.ФормаЭлементаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.БанковскиеСчета.ФормаЭлементаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ВидСчета',
			width: 101,
			height: 19,
			style: 'position:absolute;left:336px;top:33px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерСчета',
			width: 155,
			height: 19,
			style: 'position:absolute;left:102px;top:33px;width:155px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Представление:',
			style: 'position:absolute;left:8px;top:471px;width:92px;height:15px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 374,
			height: 19,
			style: 'position:absolute;left:102px;top:469px;width:374px;height:19px;',
		},
		{
			xtype: 'label',
			text: 'Банк, в котором открыт счет',
			style: 'position:absolute;left:8px;top:60px;width:552px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьБИКБанка',
			text: 'БИК:',
			style: 'position:absolute;left:8px;top:84px;width:46px;height:15px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоррСчетБанка',
			text: 'Корр. счет:',
			style: 'position:absolute;left:273px;top:84px;width:57px;height:15px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'БИКБанка',
			width: 155,
			height: 19,
			style: 'position:absolute;left:102px;top:82px;width:155px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КоррсчетБанка',
			width: 224,
			height: 19,
			style: 'position:absolute;left:336px;top:82px;width:224px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБанк',
			text: 'Наименование и город банка',
			style: 'position:absolute;left:102px;top:111px;width:458px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Прямые расчеты',
			style: 'position:absolute;left:8px;top:138px;width:129px;height:15px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:157px;width:552px;height:65px;',
			height: 65,width: 552,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьБИКБанкаДляРасчетов',
			text: 'БИК:',
			style: 'position:absolute;left:0px;top:21px;width:40px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьКоррСчетБанкаДляРасчетов',
			text: 'Корр. счет:',
			style: 'position:absolute;left:265px;top:21px;width:57px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			text: 'Банк для непрямых расчетов',
			style: 'position:absolute;left:0px;top:0px;width:551px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'БИКБанкаДляРасчетов',
			width: 153,
			height: 19,
			style: 'position:absolute;left:93px;top:21px;width:153px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КоррсчетБанкаДляРасчетов',
			width: 224,
			height: 19,
			style: 'position:absolute;left:328px;top:21px;width:224px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарийНепрямыхРасчетов',
			text: 'Снимите флажок "Прямые расчеты", если банк, в котором открыт счет, проводит платежи \r\nчерез корреспондентский счет, открытый в другом банке (банке для расчетов).\r\nВ платежных поручениях в поле "Банк получателя" будет указываться банк для расчетов, \r\nа номер счета и наименование банка, в котором открыт счет, будут выводиться в поле "Получатель".',
			style: 'position:absolute;left:15px;top:0px;width:533px;height:64px;',
		},
		{
			xtype: 'label',
			name: 'НадписьБанкДляРасчетов',
			text: 'Наименование и город банка для расчетов',
			style: 'position:absolute;left:93px;top:46px;width:459px;height:19px;',
		},
					]
				},
				{
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:246px;width:552px;height:213px;',
			height: 213,width: 552,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНомерИДатаРазрешения',
			text: 'Номер и дата разрешения ЦБ\r\nна открытие валютного счета:',
			style: 'position:absolute;left:205px;top:170px;width:327px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НомерИДатаРазрешения',
			width: 346,
			height: 19,
			style: 'position:absolute;left:205px;top:194px;width:346px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ТекстПлательщика',
			style: 'position:absolute;left:0px;top:21px;width:551px;height:33px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Флажок',
			style: 'position:absolute;left:0px;top:118px;width:311px;height:16px;',
		},
		{
			xtype: 'label',
			text: 'Дополнительная информация о счете',
			style: 'position:absolute;left:0px;top:149px;width:551px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьТекстПлательщика',
			text: 'Текст наименования организации в поле "Плательщик" :',
			style: 'position:absolute;left:0px;top:0px;width:299px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьТекстНазначения',
			text: 'Текст назначения платежа:',
			style: 'position:absolute;left:0px;top:57px;width:270px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОткрытия',
			text: 'Дата открытия:',
			style: 'position:absolute;left:0px;top:170px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОткрытия',
			width: 96,
			height: 19,
			style: 'position:absolute;left:94px;top:170px;width:96px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаЗакрытия',
			text: 'Дата закрытия:',
			style: 'position:absolute;left:0px;top:194px;width:92px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаЗакрытия',
			width: 96,
			height: 19,
			style: 'position:absolute;left:94px;top:194px;width:96px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Редактировать текст',
			style: 'position:absolute;left:417px;top:2px;width:134px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТекстПолучателя',
			text: 'Текст наименования контрагента в поле "Получатель" :',
			style: 'position:absolute;left:0px;top:0px;width:320px;height:19px;text-align:left;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыводитьМесяцВДатеДокумента',
			text: 'Выводить месяц в дате документа:',
			style: 'position:absolute;left:0px;top:57px;width:205px;height:16px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Числом',
			style: 'position:absolute;left:13px;top:75px;width:166px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Прописью',
			style: 'position:absolute;left:12px;top:94px;width:183px;height:16px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ТекстНазначения',
			style: 'position:absolute;left:0px;top:76px;width:550px;height:53px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ТекстПолучателя',
			style: 'position:absolute;left:0px;top:21px;width:550px;height:33px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Редактировать текст',
			style: 'position:absolute;left:417px;top:2px;width:133px;height:16px;',
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			text: 'Настройки печати платежных поручений',
			style: 'position:absolute;left:8px;top:229px;width:552px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 40,
			height: 19,
			style: 'position:absolute;left:520px;top:469px;width:40px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:482px;top:471px;width:37px;height:15px;text-align:center;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:496px;width:568px;height:25px;',
			width: 568,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
					tooltip:'ОК',
					iconCls:'x-WriteAndClose',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Записать',
					iconCls:'x-SaveFile',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					iconCls:'x-Close',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});