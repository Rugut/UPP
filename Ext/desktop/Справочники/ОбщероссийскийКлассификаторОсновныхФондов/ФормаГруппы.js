Ext.require(['Данные.Справочники.ОбщероссийскийКлассификаторОсновныхФондов'], function () 
{
	Ext.define('Справочники.ОбщероссийскийКлассификаторОсновныхФондов.ФормаГруппы',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:427px;height:219px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Группа Общероссийский классификатор основных фондов',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьКод',
			text: 'Код:',
			style: 'position:absolute;left:8px;top:33px;width:33px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Код',
			width: 199,
			height: 19,
			style: 'position:absolute;left:48px;top:33px;width:199px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:58px;width:83px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'Наименование',
			width: 278,
			height: 46,
			style: 'position:absolute;left:141px;top:58px;width:278px;height:46px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКонтрольноеЧисло',
			text: 'Контрольное число:',
			style: 'position:absolute;left:254px;top:33px;width:107px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'КонтрольноеЧисло',
			width: 54,
			height: 19,
			style: 'position:absolute;left:365px;top:33px;width:54px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНаименованиеГруппировки',
			text: 'Наименование полное:',
			style: 'position:absolute;left:8px;top:108px;width:123px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'НаименованиеГруппировки',
			width: 278,
			height: 46,
			style: 'position:absolute;left:141px;top:108px;width:278px;height:46px;',
		},
		{
			xtype: 'label',
			name: 'НадписьАмортизационнаяГруппа',
			text: 'Амортизационная группа:',
			style: 'position:absolute;left:8px;top:167px;width:133px;height:19px;text-align:left;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'АмортизационнаяГруппа.Представление',
			width: 278,
			height: 19,
			Хранилище:'Ссылка',
			style: 'position:absolute;left:141px;top:167px;width:278px;height:19px;',
			onTriggerClick : function(ЭтотОбъект)
			{
				var СтрокаЗнч = ЭтотОбъект.target.className;
				var Элемент = this.up('window');
				var Окно = Ext.getCmp(Элемент.getId());
				var Ссылка = Окно.Хранилище;
				if (СтрокаЗнч.indexOf("-select-") != -1)
				{
					Ext.require(['Справочники.ОбщероссийскийКлассификаторОсновныхФондов.ФормаГруппыСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОбщероссийскийКлассификаторОсновныхФондов.ФормаГруппыСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
				if (СтрокаЗнч.indexOf("-clear-") != -1)
				{
					alert('clear');
				};
				if (СтрокаЗнч.indexOf("-search-") != -1)
				{
					Ext.require(['Справочники.ОбщероссийскийКлассификаторОсновныхФондов.ФормаГруппыСобытия'], function ()
					{
						var объект = Ext.create("Справочники.ОбщероссийскийКлассификаторОсновныхФондов.ФормаГруппыСобытия");
						объект.ПередатьСсылку(Ссылка);
					});
				};
			},
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:427px;height:25px;',
			width: 427,
			height: 25,
			items:
			[
			]
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:194px;width:427px;height:25px;',
			width: 427,
			height: 25,
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
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});