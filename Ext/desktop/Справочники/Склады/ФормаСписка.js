Ext.define('Справочники.Склады.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:742px;height:321px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Склады (места хранения)',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:174px;top:33px;width:560px;height:280px;',
			height: 280,width: 560,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'40',
				},
				{
					text:'Наименование',
					width:'160',
				},
				{
					text:'Вид склада',
					width:'80',
				},
				{
					text:'№ секции',
					width:'54',
				},
				{
					text:'Тип цен розничной торговли',
					width:'120',
				},
				{
					text:'Подразделение',
					width:'120',
				},
				{
					text:'Комментарий',
					width:'160',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:280px;',
			height: 280,width: 160,
			columns:
			[
				{
					text:'Наименование',
					width:'160',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:742px;height:25px;',
			items:
			[
				{
					text:'Свойства',
				},
				{
					text:'Файлы',
				},
				{
					text:'Доступ к текущему элементу',
				},
				{
					text:'Категории',
				},
				'-',
				{
					text:'Доступ к справочнику в целом',
				},
				'-',
				'-',
			]
		},
	]
});