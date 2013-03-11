Ext.define('Отчеты.РегламентированныйОтчетАлкоПриложение7.ФормаОтчета2006Кв3',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 800,
	iconCls: 'bogus',
	title: 'Декларация об объемах закупки этилового спирта, алкогольной и спиртосодержащей продукции',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:800px;height:25px;',
			items:
			[
				{
					text:'Справка',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'КнопкаЗаполнитьСведенияОбОрганизации',
				},
				{
					text:'Разделитель',
				},
				{
					text:'РасширитьПолеБланка',
				},
				{
					text:'ВыбратьВариантОчисткиОтчета',
				},
				{
					text:'Выгрузка',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'КнопкаНастройкаСтраниц',
				},
				{
					text:'Разделитель7',
				},
				{
					text:'Разделитель5',
				},
				{
					text:'ПодменюОчистить',
				},
				{
					text:'Проверить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Выгрузить',
				},
				{
					text:'ЗаполнитьАвто',
				},
				{
					text:'Поиск',
				},
				{
					text:'Разделитель4',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:425px;width:800px;height:25px;',
			items:
			[
				{
					text:'ПодменюПечати',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'СохранитьИЗакрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:784px;height:312px;',
			height: 312,width: 784,
			items:
			[
				{
					title:'Титульный',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуТитульный',
			text: 'Добавить',
			style: 'position:absolute;left:525px;top:264px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуТитульный',
			text: 'Удалить',
			style: 'position:absolute;left:611px;top:264px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаТитульный',
			text: '',
			style: 'position:absolute;left:396px;top:264px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаТитульный',
			text: '',
			style: 'position:absolute;left:485px;top:264px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуТитульный',
			text: 'Перейти',
			style: 'position:absolute;left:696px;top:264px;width:80px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:239px;width:770px;height:21px;',
			height: 21,width: 770,
			items:
			[
				{
					title:'Страница1',
					items:
					[
					]
				},
			]
		},
					]
				},
				{
					title:'ФизЛица',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтраницуФизЛица',
			text: 'Добавить',
			style: 'position:absolute;left:525px;top:264px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтраницуФизЛица',
			text: 'Удалить',
			style: 'position:absolute;left:611px;top:264px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущаяСтраницаФизЛица',
			text: '',
			style: 'position:absolute;left:396px;top:264px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующаяСтраницаФизЛица',
			text: '',
			style: 'position:absolute;left:485px;top:264px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПерейтиНаСтраницуФизЛица',
			text: 'Перейти',
			style: 'position:absolute;left:696px;top:264px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Декларация',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиДекларация',
			text: 'Добавить',
			style: 'position:absolute;left:611px;top:264px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиДекларация',
			text: 'Удалить',
			style: 'position:absolute;left:696px;top:264px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Возвраты',
					items:
					[
		{
			xtype: 'button',
			name: 'КнопкаДобавитьДопСтрокиВозвраты',
			text: 'Добавить',
			style: 'position:absolute;left:611px;top:264px;width:80px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаУдалитьДопСтрокиВозвраты',
			text: 'Удалить',
			style: 'position:absolute;left:696px;top:264px;width:80px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:784px;height:48px;',
			height: 48,width: 784,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВводаДатаСдачи',
			style: 'position:absolute;left:103px;top:23px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерКорректировки',
			style: 'position:absolute;left:331px;top:23px;width:49px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:393px;width:784px;height:24px;',
			height: 24,width: 784,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:263px;top:5px;width:521px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Статус',
			style: 'position:absolute;left:47px;top:5px;width:119px;height:19px;',
		},
					]
				},
			]
		},
	]
});