Ext.require(['Данные.Отчеты.ДиаграммаОтложенногоПроведения'], function () 
{
	Ext.define('Отчеты.ДиаграммаОтложенногоПроведения.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:947px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Диаграмма отложенного проведения',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'НадписьДопроведено',
			text: 'НадписьДопроведено',
			style: 'position:absolute;left:8px;top:265px;width:20px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНеДопроведено',
			text: 'НадписьНеДопроведено',
			style: 'position:absolute;left:8px;top:292px;width:20px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДопроведеноОписание',
			text: 'допроведение выполнено',
			style: 'position:absolute;left:30px;top:266px;width:144px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНеДопроведеноОписание',
			text: 'допроведение не выполнено',
			style: 'position:absolute;left:30px;top:293px;width:163px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГраницаЗапрета',
			text: 'НадписьГраницаЗапрета',
			style: 'position:absolute;left:202px;top:292px;width:20px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьГраницаЗапретаОписание',
			text: 'запрет изменения данных',
			style: 'position:absolute;left:223px;top:292px;width:193px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТекущаяДата',
			text: 'НадписьТекущаяДата',
			style: 'position:absolute;left:202px;top:265px;width:20px;height:20px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТекущаяДатаОписание',
			text: 'текущая дата',
			style: 'position:absolute;left:223px;top:266px;width:118px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:947px;height:25px;',
			dock: 'top',
			items:
			[
				{
					text:'Действие1',
				},
			]
		},
	]
	});
});