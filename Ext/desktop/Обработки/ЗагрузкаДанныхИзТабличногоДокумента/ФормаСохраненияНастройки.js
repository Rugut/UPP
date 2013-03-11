Ext.define('Обработки.ЗагрузкаДанныхИзТабличногоДокумента.ФормаСохраненияНастройки',
	{
	extend: 'Ext.window.Window',
	height: 241,width: 411,
	iconCls: 'bogus',
	title: 'Сохранение настройки',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеНастройки',
			style: 'position:absolute;left:8px;top:27px;width:309px;height:19px;',
		},
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
			style: 'position:absolute;left:8px;top:75px;width:309px;height:158px;',
			height: 158,width: 309,
			columns:
			[
				{
					text:'Колонка1',
				},
			]
		},
	]
});