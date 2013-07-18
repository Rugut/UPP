Ext.require(['Данные.Обработки.ДокументооборотСКонтролирующимиОрганами'], function () 
{
	Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.НастройкиГрупповойПечати534',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:275px;height:202px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки печати',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Выбрано циклов обмена: ',
			style: 'position:absolute;left:8px;top:8px;width:160px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печатать исходный документ',
			style: 'position:absolute;left:8px;top:39px;width:259px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печатать подтверждение даты отправки',
			style: 'position:absolute;left:8px;top:62px;width:259px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печатать результат приема',
			style: 'position:absolute;left:8px;top:85px;width:259px;height:15px;',
		},
		{
			xtype: 'label',
			name: 'НадписьЧислоЦикловОбмена',
			text: '',
			style: 'position:absolute;left:199px;top:9px;width:68px;height:15px;text-align:center;',
		},
		{
			xtype: 'fieldset',
			title: '',
			style: 'position:absolute;left:8px;top:27px;width:259px;height:5px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печатать результат обработки',
			style: 'position:absolute;left:8px;top:108px;width:259px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печатать сообщение об отзыве',
			style: 'position:absolute;left:8px;top:131px;width:259px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Печатать сообщение о несоответствиях',
			style: 'position:absolute;left:8px;top:154px;width:259px;height:15px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:177px;width:275px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
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