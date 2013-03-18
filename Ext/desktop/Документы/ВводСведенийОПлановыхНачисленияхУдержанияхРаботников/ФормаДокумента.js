Ext.define('Документы.ВводСведенийОПлановыхНачисленияхУдержанияхРаботников.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:470px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод сведений о начислениях сотрудников',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:99px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОт',
			text: 'от:',
			style: 'position:absolute;left:181px;top:33px;width:16px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:199px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:640px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Редактировать номер',
				},
					]
				},
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'',
				},
				'-',
					]
				},
				'-',
				'-',
				{
					text:'',
				},
				{
					text:'',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:445px;width:640px;height:25px;',
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
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:418px;width:76px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:86px;top:418px;width:546px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:326px;top:33px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:412px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:81px;width:624px;height:333px;',
			height: 333,width: 624,
			items:
			[
				{
					title:'Начисления',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:610px;height:24px;',
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
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:610px;height:283px;',
			height: 283,width: 610,
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
					text:'Действие',
					width:'54',
				},
				{
					text:'Начисление',
					width:'100',
				},
				{
					text:'Период',
					width:'132',
				},
				{
					text:'Дата с',
					width:'65',
				},
				{
					text:'Дата по',
					width:'67',
				},
				{
					text:'Показатели для расчета начисления',
					width:'235',
				},
				{
					text:'Показатель',
					width:'110',
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
					width:'110',
				},
				{
					text:'Тарифный разряд 1',
					width:'125',
				},
				{
					text:'Показатель',
					width:'110',
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
					width:'110',
				},
				{
					text:'Тарифный разряд 2',
					width:'125',
				},
				{
					text:'Показатель',
					width:'110',
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
					width:'110',
				},
				{
					text:'Тарифный разряд 3',
					width:'125',
				},
				{
					text:'Показатель',
					width:'110',
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
					width:'110',
				},
				{
					text:'Тарифный разряд4',
					width:'125',
				},
				{
					text:'Показатель',
					width:'110',
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
					width:'110',
				},
				{
					text:'Тарифный разряд5',
					width:'125',
				},
				{
					text:'Показатель',
					width:'110',
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
					width:'110',
				},
				{
					text:'Тарифный разряд6',
					width:'125',
				},
			]
		},
					]
				},
				{
					title:'Удержания',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:24px;width:610px;height:283px;',
			height: 283,width: 610,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'101',
				},
				{
					text:'Действие',
					width:'54',
				},
				{
					text:'Удержание',
					width:'100',
				},
				{
					text:'Период',
					width:'132',
				},
				{
					text:'Дата с',
					width:'66',
				},
				{
					text:'Дата по',
					width:'66',
				},
				{
					text:'Показатели для расчета удержаний',
					width:'250',
				},
				{
					text:'Показатель',
					width:'110',
				},
				{
					text:'',
					width:'80',
				},
				{
					text:'',
					width:'45',
				},
				{
					text:'Показатель',
					width:'110',
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
					text:'Показатель',
					width:'110',
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
					text:'Показатель',
					width:'110',
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
					text:'Показатель',
					width:'110',
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
					text:'Показатель',
					width:'110',
				},
				{
					text:'Размер 6',
					width:'80',
				},
				{
					text:'Валюта 6',
					width:'45',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:0px;width:610px;height:24px;',
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
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПодразделение',
			text: 'Подразделение:',
			style: 'position:absolute;left:8px;top:57px;width:86px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Подразделение',
			style: 'position:absolute;left:99px;top:57px;width:220px;height:19px;',
		},
	]
});