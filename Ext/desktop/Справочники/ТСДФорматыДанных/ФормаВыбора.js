Ext.define('Справочники.ТСДФорматыДанных.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:495px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Форматы выгрузки для терминалов сбора данных',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:479px;height:259px;',
			height: 259,width: 479,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'35',
				},
				{
					text:'Наименование',
					width:'175',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:495px;height:25px;',
			items:
			[
				{
					text:'Действия формы выбрать',
				},
				'-',
			]
		},
	]
});