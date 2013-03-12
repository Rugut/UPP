Ext.define('Справочники.НастройкиОбменаДанными.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:664px;height:411px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Настройки обмена данными',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:648px;height:370px;',
			height: 370,width: 648,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Наименование',
					width:'277',
				},
				{
					text:'Тип настройки',
					width:'120',
				},
				{
					text:'Узел информационной базы',
					width:'140',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:664px;height:25px;',
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