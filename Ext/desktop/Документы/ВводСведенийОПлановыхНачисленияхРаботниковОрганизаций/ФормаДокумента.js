Ext.define('Документы.ВводСведенийОПлановыхНачисленияхРаботниковОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:600px;height:576px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод сведений о плановых начислениях сотрудников организации',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:43px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:52px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от',
			style: 'position:absolute;left:132px;top:33px;width:20px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:152px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:287px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:373px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:524px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:524px;width:497px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:227px;width:585px;height:24px;',
			items:
			[
				{
					text:'&Добавить',
				},
				'-',
				{
					text:'',
				},
				{
					text:'Изменить',
				},
				{
					text:'Удалить',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'',
				},
				{
					text:'Конструктор настроек...',
				},
				{
					text:'',
				},
				'-',
				{
					text:'По сотруднику',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:251px;width:585px;height:267px;',
			height: 267,width: 585,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Таб. №',
					width:'70',
				},
				{
					text:'Сотрудник',
					width:'100',
				},
				{
					text:'Начисление',
					width:'90',
				},
				{
					text:'Действие',
					width:'60',
				},
				{
					text:'Период',
					width:'132',
				},
				{
					text:'Дата "с"',
					width:'66',
				},
				{
					text:'Дата "по"',
					width:'66',
				},
				{
					text:'Показатели для расчета начисления',
					width:'205',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 1',
					width:'80',
				},
				{
					text:'Валюта 1',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'80',
				},
				{
					text:'Тарифный разряд',
					width:'125',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 2',
					width:'80',
				},
				{
					text:'Валюта 2',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'80',
				},
				{
					text:'Тарифный разряд 2',
					width:'125',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 3',
					width:'80',
				},
				{
					text:'Валюта 3',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'80',
				},
				{
					text:'Тарифный разряд 3',
					width:'125',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 4',
					width:'80',
				},
				{
					text:'Валюта 4',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'80',
				},
				{
					text:'Тарифный разряд 4',
					width:'125',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 5',
					width:'80',
				},
				{
					text:'Валюта 5',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'80',
				},
				{
					text:'Тарифный разряд 5',
					width:'125',
				},
				{
					text:'Показатель',
					width:'80',
				},
				{
					text:'Размер 6',
					width:'80',
				},
				{
					text:'Валюта 6',
					width:'45',
				},
				{
					text:'Показатель для ТР',
					width:'80',
				},
				{
					text:'Тарифный разряд 6',
					width:'125',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:600px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:551px;width:600px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Ответственный:',
			style: 'position:absolute;left:287px;top:56px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:373px;top:56px;width:220px;height:19px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:125px;width:585px;height:80px;',
			height: 80,width: 585,
			columns:
			[
				{
					text:'Таб. №',
					width:'60',
				},
				{
					text:'Сотрудник',
					width:'222',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:101px;width:585px;height:24px;',
			items:
			[
				{
					text:'Списком сотрудников',
				},
			]
		},
	]
});