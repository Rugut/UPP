Ext.define('Обработки.УниверсальныйЖурналДокументов.ОсновнаяФорма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:681px;height:409px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Универсальный журнал документов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:667px;height:350px;',
			height: 350,width: 667,
			columns:
			[
				{
					text:'',
					width:'25',
				},
				{
					text:'Дата',
					width:'100',
				},
				{
					text:'Номер',
					width:'100',
				},
				{
					text:'Вид документа',
					width:'141',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:681px;height:26px;',
			items:
			[
				{
					text:'&Изменить',
				},
				{
					text:'Отмена проведения',
				},
				{
					text:'Отбор и сортировка',
				},
				{
					text:'Скопировать',
				},
				'-',
				'-',
				{
					text:'&Изменить',
				},
				{
					text:'Восстановить значения...',
				},
				'-',
				'-',
				'-',
				'-',
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Вывести список...',
				},
				{
					text:'Обновить',
				},
				{
					text:'Настройка списка...',
				},
				{
					text:'Добавить',
				},
				{
					text:'Провести',
				},
				'-',
				{
					text:'Состав документов и граф журнала...',
				},
				'-',
				'-',
				{
					text:'Провести',
				},
				{
					text:'Установить интервал дат',
				},
				{
					text:'Отмена проведения',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				'-',
				{
					text:'Установить пометку удаления',
				},
				{
					text:'Скопировать',
				},
				{
					text:'Справка',
				},
				'-',
				{
					text:'Обновить',
				},
				'-',
				'-',
				{
					text:'Добавить',
				},
				{
					text:'Состав...',
				},
				'-',
				{
					text:'Установить пометку удаления',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьОтбор',
			text: '',
			style: 'position:absolute;left:8px;top:386px;width:667px;height:15px;',
		},
	]
});