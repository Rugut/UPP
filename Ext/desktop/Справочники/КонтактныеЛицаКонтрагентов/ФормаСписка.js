Ext.define('Справочники.КонтактныеЛицаКонтрагентов.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 416,
	iconCls: 'bogus',
	title: 'Справочник Контактные лица контрагентов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:400px;height:280px;',
			height: 280,width: 400,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
				{
					text:'Владелец',
				},
				{
					text:'Должность',
				},
				{
					text:'РольКонтактногоЛица',
				},
				{
					text:'Комментарий',
				},
				{
					text:'КонтактноеЛицо',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:416px;height:25px;',
			items:
			[
			]
		},
	]
});