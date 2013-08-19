Ext.require(['Данные.Документы.ТабельУчетаРабочегоВремениОрганизации'], function () 
{
	Ext.define('Документы.ТабельУчетаРабочегоВремениОрганизации.ФормаИзмененияСоставаКолонок',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:306px;height:467px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Состав колонок табеля',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Надпись1',
			style: 'position:absolute;left:8px;top:8px;width:25px;height:32px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Выберите не более шести видов использования рабочего времени для ввода в данном документе',
			style: 'position:absolute;left:36px;top:8px;width:262px;height:32px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Выбранные виды времени:',
			style: 'position:absolute;left:8px;top:48px;width:146px;height:19px;',
		},
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:8px;top:71px;width:290px;height:114px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Все виды времени:',
			style: 'position:absolute;left:8px;top:193px;width:102px;height:19px;',
		},
		{
			xtype: 'itemselector',
			style: 'position:absolute;left:8px;top:215px;width:290px;height:219px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:442px;width:306px;height:25px;',
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