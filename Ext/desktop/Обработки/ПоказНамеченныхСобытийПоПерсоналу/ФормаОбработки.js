Ext.define('Обработки.ПоказНамеченныхСобытийПоПерсоналу.ФормаОбработки',
	{
	extend: 'Ext.window.Window',
	height: 374,width: 541,
	iconCls: 'bogus',
	title: 'Запланированные кадровые перестановки',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачала',
			style: 'position:absolute;left:91px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:191px;top:8px;width:80px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:80px;width:525px;height:261px;',
			height: 261,width: 525,
			columns:
			[
				{
					text:'ФормироватьДокумент',
				},
				{
					text:'Период',
				},
				{
					text:'Сотрудник',
				},
				{
					text:'Организация',
				},
				{
					text:'Подразделение',
				},
				{
					text:'Должность',
				},
				{
					text:'ГрафикРаботы',
				},
				{
					text:'Ставка',
				},
				{
					text:'ЗаниматьСтавку',
				},
				{
					text:'ПланируемоеСобытие',
				},
			]
		},
		{
			xtype: 'button',
			name: 'КнопкаВыбораПериода',
			text: '...',
			style: 'position:absolute;left:273px;top:8px;width:20px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:56px;width:525px;height:24px;',
			items:
			[
				{
					text:'Действия',
				},
				{
					text:'Действие7',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Снять',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Снять',
				},
				{
					text:'Инвертировать',
				},
				{
					text:'Установить',
				},
				{
					text:'Действие6',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Действие4',
				},
				{
					text:'Инвертировать',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Установить',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие8',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие4',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:349px;width:541px;height:25px;',
			items:
			[
				{
					text:'Действие13',
				},
				{
					text:'Создать',
				},
				{
					text:'Закрыть',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:91px;top:32px;width:442px;height:19px;',
		},
	]
});