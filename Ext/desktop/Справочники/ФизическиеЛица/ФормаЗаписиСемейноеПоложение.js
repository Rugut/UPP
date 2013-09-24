Ext.require(['Данные.Справочники.ФизическиеЛица'], function () 
{
	Ext.define('Справочники.ФизическиеЛица.ФормаЗаписиСемейноеПоложение',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:354px;height:95px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Семейное положение физ. лица',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Запись о семейном положении действует с:',
			style: 'position:absolute;left:8px;top:43px;width:258px;height:19px;text-align:left;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'Период',
			width: 80,
			height: 19,
			style: 'position:absolute;left:266px;top:43px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Семейное положение:',
			style: 'position:absolute;left:8px;top:8px;width:116px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'СемейноеПоложение.Представление',
			width: 220,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:126px;top:8px;width:220px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ФизическиеЛица.ФормаЗаписиСемейноеПоложениеСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ФизическиеЛица.ФормаЗаписиСемейноеПоложениеСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ФизическиеЛица.ФормаЗаписиСемейноеПоложениеСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ФизическиеЛица.ФормаЗаписиСемейноеПоложениеСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'label',
			text: '',
			style: 'position:absolute;left:8px;top:32px;width:338px;height:6px;border-bottom: 2px solid maroon; color: #9F6500; border-width:thin ; border-color: #B3AC86; font-weight: 600;'
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:70px;width:354px;height:25px;',
			width: 354,
			height: 25,
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'История...',
					tooltip:'Просмотр истории изменений',
				},
				'-',
				{
					text:'OK',
					tooltip:'',
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