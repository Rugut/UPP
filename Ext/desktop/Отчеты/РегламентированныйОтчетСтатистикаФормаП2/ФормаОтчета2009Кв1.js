Ext.require(['Данные.Отчеты.РегламентированныйОтчетСтатистикаФормаП2'], function () 
{
	Ext.define('Отчеты.РегламентированныйОтчетСтатистикаФормаП2.ФормаОтчета2009Кв1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:716px;height:395px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Статистика: Форма П-2',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:716px;height:25px;',
			width: 716,
			height: 25,
			items:
			[
				{
					text:'Очистить',
					tooltip:'',
				},
				'-',
				{
					text:'Поиск',
					tooltip:'Поиск в регламентированном отчете',
				},
				'-',
				{
					text:'Обновить',
					tooltip:'Обновить сведения об организации',
				},
				'-',
				{
					text:'Действие2',
					tooltip:'Открыть справку',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Дата подписи:',
			style: 'position:absolute;left:8px;top:33px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ПолеВводаДатаСдачи',
			width: 80,
			height: 19,
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:183px;top:343px;width:80px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Комментарий',
			width: 445,
			height: 19,
			style: 'position:absolute;left:263px;top:343px;width:445px;height:19px;',
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:630px;top:5px;width:78px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'Надпись30',
			text: 'Надпись30',
			style: 'position:absolute;left:445px;top:33px;width:228px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись',
			text: 'Организация:',
			style: 'position:absolute;left:369px;top:33px;width:75px;height:19px;text-align:right;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:180px;top:33px;width:116px;height:19px;',
			width: 116,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: '/',
			style: 'position:absolute;left:299px;top:35px;width:7px;height:15px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:311px;top:33px;width:49px;height:19px;',
			width: 49,
			height: 19,
		},
		{
			xtype: 'label',
			name: 'Надпись50',
			text: 'Статус:',
			style: 'position:absolute;left:8px;top:343px;width:46px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Статус.Представление',
			width: 119,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:58px;top:343px;width:119px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.РегламентированныйОтчетСтатистикаФормаП2.ФормаОтчета2009Кв1События'], function ()
					{
						var объект = Ext.create("Отчеты.РегламентированныйОтчетСтатистикаФормаП2.ФормаОтчета2009Кв1События");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.РегламентированныйОтчетСтатистикаФормаП2.ФормаОтчета2009Кв1События'], function ()
					{
						var объект = Ext.create("Отчеты.РегламентированныйОтчетСтатистикаФормаП2.ФормаОтчета2009Кв1События");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:370px;width:716px;height:25px;',
			width: 716,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				'-',
				{
					text:'ОК',
					tooltip:'Действие сохранить и закрыть',
				},
				'-',
				{
					text:'Записать',
					tooltip:'Действие записать',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});