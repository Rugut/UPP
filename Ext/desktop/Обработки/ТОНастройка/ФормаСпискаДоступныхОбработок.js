Ext.define('Обработки.ТОНастройка.ФормаСпискаДоступныхОбработок',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:957px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Список доступных обработок обслуживания',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:236px;width:957px;height:25px;',
			items:
			[
				{
					text:'Выбрать',
				},
				'-',
				{
					text:'Отменить',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:941px;height:220px;',
			height: 220,width: 941,
			columns:
			[
				{
					text:'Наименование',
					width:'286',
				},
				{
					text:'Имя файла',
					width:'196',
				},
				{
					text:'Описание',
					width:'563',
				},
				{
					text:'Версия',
					width:'45',
				},
				{
					text:'Версия API',
					width:'83',
				},
			]
		},
	]
});