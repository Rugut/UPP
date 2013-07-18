Ext.require(['Данные.Документы.ВосстановлениеНДСпоОбъектамНедвижимости'], function () 
{
	Ext.define('Документы.ВосстановлениеНДСпоОбъектамНедвижимости.ФормаВводаВыручки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:353px;height:110px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод доли выручки, не облагаемой НДС (%)',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьОбщаяВыручка',
			text: 'Общая выручка:',
			style: 'position:absolute;left:8px;top:8px;width:205px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ОбщаяВыручка',
			style: 'position:absolute;left:216px;top:8px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыручкаНеОблагаемаяНДС',
			text: 'Выручка, не облагаемая НДС:',
			style: 'position:absolute;left:8px;top:33px;width:205px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ВыручкаНеОблагаемаяНДС',
			style: 'position:absolute;left:216px;top:33px;width:129px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьВыручкаНеОблагаемаяНДС1',
			text: 'Доля выручки, не облагаемая НДС (%):',
			style: 'position:absolute;left:8px;top:58px;width:205px;height:19px;',
		},
		{
			xtype: 'numberfield',
			hideLabel: true,
			hideTrigger: true,
			disabled: false,
			value: 0,
			name: 'ДоляВыручкиНеОблагаемаяНДС',
			style: 'position:absolute;left:216px;top:58px;width:129px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:85px;width:353px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'',
				},
				'-',
				{
					text:'Отмена',
				},
			]
		},
	]
	});
});