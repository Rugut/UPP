Ext.define('Обработки.ДокументооборотСКонтролирующимиОрганами.Справочник_ОрганыПФР_ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:628px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Органы ПФР',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:612px;height:259px;',
			height: 259,width: 612,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'74',
				},
				{
					text:'Наименование',
					width:'483',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:628px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
			]
		},
	]
});