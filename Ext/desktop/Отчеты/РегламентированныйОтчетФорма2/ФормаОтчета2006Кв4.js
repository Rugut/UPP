Ext.require(['Данные.Отчеты.РегламентированныйОтчетФорма2'], function () 
{
	Ext.define('Отчеты.РегламентированныйОтчетФорма2.ФормаОтчета2006Кв4',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:720px;height:491px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Форма №2',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:720px;height:25px;',
			width: 720,
			height: 25,
			items:
			[
				{
					text:'Проверить в Интернете',
					tooltip:'cd23a32-5c7c-43f2-9021-80d98128556',
					iconCls:'x-CheckSyntax',
				},
				{
					text:'Отправить',
					tooltip:'',
				},
				'-',
				{
					text:'Подготовить к отправке и подписать',
					tooltip:'',
				},
				{
					text:'Подготовить к отправке',
					tooltip:'',
				},
				'-',
				{
					text:'Показать отправки',
					tooltip:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:466px;width:720px;height:25px;',
			width: 720,
			height: 25,
			items:
			[
				{
					xtype: 'tbfill'
				},
			]
		},
		{
			xtype: 'label',
			name: '_ИндикаторВнешнегоОтчета',
			text: 'Внешний отчет',
			style: 'position:absolute;left:634px;top:5px;width:78px;height:15px;',
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:74px;width:704px;height:48px;',
			height: 48,width: 704,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:82px;top:0px;width:120px;height:19px;',
			width: 120,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаТочностьЕдиницыИзмерения',
			style: 'position:absolute;left:262px;top:0px;width:32px;height:19px;',
			width: 32,
			height: 19,
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
			style: 'position:absolute;left:82px;top:25px;width:80px;height:19px;',
		},
		{
			xtype: 'combobox',
			style: 'position:absolute;left:172px;top:25px;width:116px;height:19px;',
			width: 116,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:303px;top:25px;width:49px;height:19px;',
			width: 49,
			height: 19,
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:436px;width:704px;height:22px;',
			height: 22,width: 704,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КомментарийОбщий',
			width: 441,
			height: 19,
			style: 'position:absolute;left:263px;top:3px;width:441px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:183px;top:5px;width:80px;height:15px;',
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
			style: 'position:absolute;left:47px;top:3px;width:119px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Отчеты.РегламентированныйОтчетФорма2.ФормаОтчета2006Кв4События'], function ()
					{
						var объект = Ext.create("Отчеты.РегламентированныйОтчетФорма2.ФормаОтчета2006Кв4События");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Отчеты.РегламентированныйОтчетФорма2.ФормаОтчета2006Кв4События'], function ()
					{
						var объект = Ext.create("Отчеты.РегламентированныйОтчетФорма2.ФормаОтчета2006Кв4События");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:122px;width:704px;height:314px;',
			height: 314,width: 704,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'combobox',
			style: 'position:absolute;left:0px;top:268px;width:232px;height:19px;',
			width: 232,
			height: 19,
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ПолеВводаЗначениеКорректировкиФормаОтчета',
			style: 'position:absolute;left:238px;top:268px;width:117px;height:19px;',
			width: 117,
			height: 19,
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ПолеВводаКомментарийФормаОтчета',
			width: 342,
			height: 19,
			style: 'position:absolute;left:362px;top:268px;width:342px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиФормаОтчета',
			text: 'Добавить',
			style: 'position:absolute;left:142px;top:294px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиФормаОтчета',
			text: 'Удалить',
			style: 'position:absolute;left:228px;top:294px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДополнительныеСтроки',
			text: 'Дополнительные строки:',
			style: 'position:absolute;left:0px;top:294px;width:136px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
		{
			xtype: 'panel',
			style: 'position:absolute;left:8px;top:33px;width:704px;height:37px;',
			height: 37,width: 704,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
		{
			xtype: 'panel',
			style: 'position:absolute;left:0px;top:0px;width:704px;height:35px;',
			height: 35,width: 704,
			tabBar:{hidden:true},
			items:
			[
				{
					items:
					[
					]
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
	]
	});
});