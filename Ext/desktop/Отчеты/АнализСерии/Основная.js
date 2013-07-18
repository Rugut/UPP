Ext.require(['Данные.Отчеты.АнализСерии'], function () 
{
	Ext.define('Отчеты.АнализСерии.Основная',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:735px;height:484px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Анализ серии',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьСостояние',
			text: 'На дату:',
			style: 'position:absolute;left:8px;top:33px;width:52px;height:19px;',
		},
		{
			xtype: 'datefield',
			hideLabel: true,
			disabled: false,
			value: 0,
			format: 'd.m.Y',
			name: 'ДатаОтч',
			width: 96,
			height: 19,
			style: 'position:absolute;left:60px;top:33px;width:96px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Показать остатки по сериям',
			style: 'position:absolute;left:8px;top:60px;width:176px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНоменклатура',
			text: 'Номенклатура:',
			style: 'position:absolute;left:175px;top:33px;width:82px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Номенклатура',
			width: 205,
			height: 19,
			style: 'position:absolute;left:260px;top:33px;width:205px;height:19px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Разбивать документы по разделам',
			style: 'position:absolute;left:193px;top:60px;width:211px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСерия',
			text: 'Серия:',
			style: 'position:absolute;left:480px;top:33px;width:37px;height:19px;',
		},
		{
			xtype: 'trigger',
			hideLabel: true,
			disabled: false,
			trigger1Cls: 'x-form-select-trigger',
			trigger2Cls: 'x-form-clear-trigger',
			name: 'Серия',
			width: 205,
			height: 19,
			style: 'position:absolute;left:522px;top:33px;width:205px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:735px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
				{
					text:'Новое окно',
				},
				'-',
				{
					text:'Закрыть',
				},
					]
				},
				'-',
				{
					text:'Сформировать',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
	]
	});
});