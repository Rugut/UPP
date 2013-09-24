Ext.require(['Данные.Обработки.МенеджерКонтактов'], function () 
{
	Ext.define('Обработки.МенеджерКонтактов.ФормаНастройкиКалендаря',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:357px;height:471px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Настройка параметров календаря',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'panel',
			style: 'position:absolute;left:9px;top:7px;width:340px;height:431px;',
			height: 431,width: 340,
			items:
			[
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Настройка режимов "День", "Неделя", "Месяц"',
			style: 'position:absolute;left:6px;top:52px;width:326px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Отображение документов "Событие" (по типу события):',
			style: 'position:absolute;left:12px;top:327px;width:289px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Отображение документов "Событие" (по состоянию):',
			style: 'position:absolute;left:12px;top:263px;width:320px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Количество отображаемых дней недели:',
			style: 'position:absolute;left:12px;top:180px;width:213px;height:15px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ОграничитьВремяС',
			width: 38,
			height: 19,
			style: 'position:absolute;left:142px;top:72px;width:38px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ОграничитьВремяПо',
			width: 38,
			height: 19,
			style: 'position:absolute;left:202px;top:72px;width:38px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'ТекстОграничитьВремяПо',
			text: 'по',
			style: 'position:absolute;left:184px;top:72px;width:15px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Ограничить время с',
			style: 'position:absolute;left:12px;top:72px;width:128px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Настройка режима "День":',
			style: 'position:absolute;left:12px;top:94px;width:213px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Занятость помещений',
			style: 'position:absolute;left:18px;top:156px;width:136px;height:15px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Ответственные.Представление',
			width: 326,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:6px;top:27px;width:326px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаНастройкиКалендаряСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаНастройкиКалендаряСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Обработки.МенеджерКонтактов.ФормаНастройкиКалендаряСобытия'], function ()
					{
						var объект = Ext.create("Обработки.МенеджерКонтактов.ФормаНастройкиКалендаряСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: 'Отображать календарь по ответственным:',
			style: 'position:absolute;left:6px;top:6px;width:326px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: '1 день',
			style: 'position:absolute;left:18px;top:115px;width:200px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: '2 дня',
			style: 'position:absolute;left:18px;top:136px;width:200px;height:15px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: '5 дней (Понедельник, ..., Пятница)',
			style: 'position:absolute;left:18px;top:200px;width:200px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: '6 дней (Понедельник, ..., Суббота)',
			style: 'position:absolute;left:18px;top:220px;width:200px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: '7 дней (Полная неделя)',
			style: 'position:absolute;left:18px;top:240px;width:144px;height:15px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Все события',
			style: 'position:absolute;left:18px;top:283px;width:94px;height:15px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Только запланированные',
			style: 'position:absolute;left:18px;top:303px;width:160px;height:15px;',
		},
			]
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Все типы',
			style: 'position:absolute;left:18px;top:347px;width:76px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Только входящие',
			style: 'position:absolute;left:18px;top:368px;width:116px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Только исходящие',
			style: 'position:absolute;left:18px;top:389px;width:120px;height:16px;',
		},
			]
		},
					]
				},
				{
					items:
					[
		{
			xtype: 'label',
			text: 'Заказы',
			style: 'position:absolute;left:6px;top:6px;width:326px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Отображение заказов (покупателей и поставщикам):',
			style: 'position:absolute;left:6px;top:27px;width:279px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Отображать заказы',
			style: 'position:absolute;left:16px;top:47px;width:192px;height:16px;',
		},
		{
			xtype: 'radiogroup',
			defaults: {name: 'ccType'},
			items: [
		{
			xtype: 'radio',
			boxLabel: 'Отображать заказы покупателей',
			style: 'position:absolute;left:26px;top:68px;width:192px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Отображать заказы поставщикам',
			style: 'position:absolute;left:26px;top:89px;width:200px;height:16px;',
		},
		{
			xtype: 'radio',
			boxLabel: 'Отображать все заказы',
			style: 'position:absolute;left:26px;top:110px;width:148px;height:16px;',
		},
			]
		},
					]
				},
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:446px;width:357px;height:25px;',
			width: 357,
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