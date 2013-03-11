Ext.define('Обработки.КонсольОтчетов.ФормаСохраненияНастроек',
	{
	extend: 'Ext.window.Window',
	height: 250,width: 398,
	iconCls: 'bogus',
	title: 'Сохранение настройки',
	
	items:
	[
		{
			xtype: 'button',
			name: 'КнопкаВыполнить',
			text: 'ОК',
			style: 'position:absolute;left:291px;top:8px;width:99px;height:22px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеНастройки',
			style: 'position:absolute;left:8px;top:31px;width:260px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:77px;width:260px;height:140px;',
			height: 140,width: 260,
			columns:
			[
				{
					text:'',
				},
			]
		},
		{
			xtype: 'button',
			name: 'Отмена',
			text: 'Отмена',
			style: 'position:absolute;left:291px;top:35px;width:99px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'Удалить',
			text: 'Удалить',
			style: 'position:absolute;left:291px;top:62px;width:99px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'Справка',
			text: 'Справка',
			style: 'position:absolute;left:291px;top:89px;width:99px;height:22px;',
		},
	]
});