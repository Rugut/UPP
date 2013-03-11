Ext.define('Справочники.ТиповыеАнкеты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 470,width: 445,
	iconCls: 'bogus',
	title: 'Типовая анкета',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:358px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:95px;top:33px;width:217px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:445px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие3',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Подменю',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие',
				},
				{
					text:'РедактироватьКодНомер',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие5',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:445px;width:445px;height:25px;',
			items:
			[
				{
					text:'ПросмотрHTML',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'Закрыть1',
				},
				{
					text:'Записать',
				},
				{
					text:'ДействиеПечать',
				},
				{
					text:'РазделительОК2',
				},
				{
					text:'РазделительОК',
				},
				{
					text:'РазделительОК1',
				},
				{
					text:'Отправить',
				},
				{
					text:'ОК',
				},
				{
					text:'РазделительЗакрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:166px;width:430px;height:272px;',
			height: 272,width: 430,
			items:
			[
				{
					title:'Основная',
				},
				{
					title:'СтраницаВопросы',
				},
				{
					title:'СтраницаМакет',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НаименованиеАнкеты',
			style: 'position:absolute;left:95px;top:57px;width:343px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Вступление',
			style: 'position:absolute;left:95px;top:82px;width:343px;height:80px;',
		},
	]
});