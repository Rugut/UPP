Ext.define('Справочники.НастройкиОбменаССайтом.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:724px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Справочник Настройки обмена с WEB - сайтом',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:708px;height:259px;',
			height: 259,width: 708,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'181',
				},
				{
					text:'Загрузка',
					width:'110',
				},
				{
					text:'Выгрузка',
					width:'100',
				},
				{
					text:'Папка/URL для обмена',
					width:'250',
				},
				{
					text:'Комментарий',
					width:'101',
				},
				{
					text:'Сайт',
					width:'200',
				},
				{
					text:'Каталог выгрузки',
					width:'200',
				},
				{
					text:'Выгружать на сайт',
					width:'70',
				},
				{
					text:'Узел обмена товарами',
					width:'100',
				},
				{
					text:'Узел обмена заказами',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:724px;height:25px;',
			items:
			[
				'-',
				{
					text:'Выполнить обмен',
				},
				{
					text:'Выполнить обмен',
				},
				'-',
				{
					text:'Монитор обменов',
				},
				{
					text:'Монитор обменов',
				},
				'-',
				{
					text:'Помощник настройки',
				},
			]
		},
	]
});