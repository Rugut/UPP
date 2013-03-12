Ext.define('Обработки.ГрафикЗаказов.ФормаОтображениеИзменений',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:747px;height:335px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Список изменений',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:310px;width:747px;height:25px;',
			items:
			[
				{
					text:'Сохранить изменения',
				},
				{
					text:'Не сохранять изменения',
				},
				{
					text:'Отмена',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:48px;width:731px;height:254px;',
			height: 254,width: 731,
			columns:
			[
				{
					text:'Изменять',
					width:'59',
				},
				{
					text:'Заказ',
					width:'21',
				},
				{
					text:'Заказ',
					width:'368',
				},
				{
					text:'Дата запуска',
					width:'65',
				},
				{
					text:'Исходная',
					width:'80',
				},
				{
					text:'Новая',
					width:'65',
				},
				{
					text:'Дата исполнения',
					width:'84',
				},
				{
					text:'Исходная',
					width:'73',
				},
				{
					text:'Новая',
					width:'76',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИнформация',
			text: '',
			style: 'position:absolute;left:8px;top:5px;width:731px;height:38px;',
		},
	]
});