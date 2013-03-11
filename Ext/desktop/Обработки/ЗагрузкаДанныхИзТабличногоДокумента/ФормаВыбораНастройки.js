Ext.define('Обработки.ЗагрузкаДанныхИзТабличногоДокумента.ФормаВыбораНастройки',
	{
	extend: 'Ext.window.Window',
	height: 241,width: 411,
	iconCls: 'bogus',
	title: 'Выбор настройки',
	
	items:
	[
		{
			xtype: 'button',
			name: 'ОК',
			text: 'ОК',
			style: 'position:absolute;left:329px;top:27px;width:74px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Отмена',
			text: 'Отмена',
			style: 'position:absolute;left:329px;top:51px;width:74px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'Удалить',
			text: 'Удалить',
			style: 'position:absolute;left:329px;top:75px;width:74px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:316px;height:225px;',
			height: 225,width: 316,
			columns:
			[
				{
					text:'Колонка1',
				},
			]
		},
	]
});