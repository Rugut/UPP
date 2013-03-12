Ext.define('Справочники.ПодразделенияОрганизаций.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:441px;height:380px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Подразделения организации',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:425px;height:315px;',
			height: 315,width: 425,
			columns:
			[
				{
					text:'Наименование',
					width:'220',
				},
				{
					text:'Код',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:441px;height:25px;',
			items:
			[
				{
					text:'Иерархический просмотр',
				},
				{
					text:'',
				},
				{
					text:'Переместить в группу',
				},
				{
					text:'&Добавить',
				},
				'-',
				'-',
				{
					text:'Справка',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Установить пометку удаления',
				},
				'-',
				{
					text:'Выбрать',
				},
				{
					text:'Настройка списка...',
				},
				{
					text:'&Добавить',
				},
				{
					text:'Вывести список...',
				},
				{
					text:'Иерархический просмотр',
				},
				{
					text:'Обновить',
				},
				{
					text:'&Изменить',
				},
				'-',
				'-',
				{
					text:'&Изменить',
				},
				'-',
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:233px;top:33px;width:200px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Подразделения организации',
			style: 'position:absolute;left:8px;top:33px;width:223px;height:19px;',
		},
	]
});