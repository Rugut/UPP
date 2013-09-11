Ext.require(['Данные.Справочники.Регионы'], function () 
{
	Ext.define('Справочники.Регионы.ФормаВводаРегиона',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:336px;height:272px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Ввод региона',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:336px;height:25px;',
			width: 336,
			height: 25,
			items:
			[
				{
					text:'Классификатор',
					tooltip:'Вызвать форму загрузки адресных классификаторов',
				},
			]
		},
		{
			xtype: 'label',
			text: 'Адрес',
			style: 'position:absolute;left:8px;top:57px;width:320px;height:16px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		{
			xtype: 'label',
			name: 'НадписьРегион',
			text: 'Регион:',
			style: 'position:absolute;left:8px;top:79px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Регион',
			width: 226,
			height: 19,
			style: 'position:absolute;left:102px;top:79px;width:226px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРайон',
			text: 'Район:',
			style: 'position:absolute;left:8px;top:103px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Район',
			width: 226,
			height: 19,
			style: 'position:absolute;left:102px;top:103px;width:226px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГород',
			text: 'Город:',
			style: 'position:absolute;left:8px;top:127px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Город',
			width: 226,
			height: 19,
			style: 'position:absolute;left:102px;top:127px;width:226px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаселенныйПункт',
			text: 'Нас. пункт:',
			style: 'position:absolute;left:8px;top:151px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаселенныйПункт',
			width: 226,
			height: 19,
			style: 'position:absolute;left:102px;top:151px;width:226px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПредставление',
			text: 'Представление:',
			style: 'position:absolute;left:8px;top:178px;width:86px;height:19px;',
		},
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'Представление',
			style: 'position:absolute;left:102px;top:179px;width:226px;height:60px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСтрана',
			text: 'Страна:',
			style: 'position:absolute;left:8px;top:33px;width:92px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'Страна.Представление',
			width: 226,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:102px;top:33px;width:226px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.Регионы.ФормаВводаРегионаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Регионы.ФормаВводаРегионаСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.Регионы.ФормаВводаРегионаСобытия'], function ()
					{
						var объект = Ext.create("Справочники.Регионы.ФормаВводаРегионаСобытия");
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
			style: 'position:absolute;left:0px;top:247px;width:336px;height:25px;',
			width: 336,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
					tooltip:'',
				},
				'-',
				{
					text:'Закрыть',
					tooltip:'',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});