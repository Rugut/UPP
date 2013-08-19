Ext.require(['Данные.Справочники.ДоверенностиНалогоплательщика'], function () 
{
	Ext.define('Справочники.ДоверенностиНалогоплательщика.ФормаВводаУдостоверения',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:330px;height:160px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Данные удостоверения физического лица',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Вид документа:',
			style: 'position:absolute;left:8px;top:8px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			name: 'ДокументВид.Представление',
			width: 204,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:118px;top:8px;width:204px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ДоверенностиНалогоплательщика.ФормаВводаУдостоверенияСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ДоверенностиНалогоплательщика.ФормаВводаУдостоверенияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ДоверенностиНалогоплательщика.ФормаВводаУдостоверенияСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ДоверенностиНалогоплательщика.ФормаВводаУдостоверенияСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Серия:',
			style: 'position:absolute;left:8px;top:33px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументСерия',
			width: 80,
			height: 19,
			style: 'position:absolute;left:118px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Номер:',
			style: 'position:absolute;left:202px;top:33px;width:38px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументНомер',
			width: 80,
			height: 19,
			style: 'position:absolute;left:242px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Дата выдачи :',
			style: 'position:absolute;left:8px;top:58px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДокументДатаВыдачи',
			width: 80,
			height: 19,
			style: 'position:absolute;left:118px;top:58px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Кем выдан :',
			style: 'position:absolute;left:8px;top:83px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументКемВыдан',
			width: 204,
			height: 19,
			style: 'position:absolute;left:118px;top:83px;width:204px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Код подразделения:',
			style: 'position:absolute;left:8px;top:108px;width:108px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ДокументКодПодразделения',
			width: 80,
			height: 19,
			style: 'position:absolute;left:118px;top:108px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:135px;width:330px;height:25px;',
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
					text:'Закрыть',
					handler: function () {this.up('window').close();},
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