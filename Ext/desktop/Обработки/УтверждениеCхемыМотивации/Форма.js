Ext.define('Обработки.УтверждениеCхемыМотивации.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:629px;height:362px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Утверждение схемы мотивации',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:629px;height:25px;',
			items:
			[
				'-',
				{
					text:'Заполнить',
				},
				{
					text:'Утвердить',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:337px;width:629px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаУтверждения',
			style: 'position:absolute;left:189px;top:41px;width:98px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаУтверждения',
			text: 'Схемы мотивации действуют с:',
			style: 'position:absolute;left:8px;top:41px;width:170px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Вид схемы мотивации:',
			style: 'position:absolute;left:295px;top:41px;width:122px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидСхемыМотивации',
			style: 'position:absolute;left:422px;top:41px;width:199px;height:19px;',
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:71px;width:613px;height:258px;',
			height: 258,width: 613,
			items:
			[
				{
					title:'Начисления',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:33px;width:599px;height:199px;',
			height: 199,width: 599,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'150',
				},
				{
					text:'Начисление',
					width:'150',
				},
				{
					text:'Показатели для расчета начисления',
					width:'250',
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
					text:'Тарифный разряд 4',
					width:'125',
				},
				{
					text:'Показатель',
					width:'106',
				},
				{
					text:'Размер 5',
					width:'84',
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
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:599px;height:24px;',
			items:
			[
				{
					text:'Закончить редактирование',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'&Изменить',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'&Удалить',
				},
				'-',
				{
					text:'Заполнить по виду схемы мотивации',
				},
				'-',
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'&Добавить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'&Переместить вверх',
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
			style: 'position:absolute;left:6px;top:33px;width:599px;height:199px;',
			height: 199,width: 599,
			columns:
			[
				{
					text:'№',
					width:'28',
				},
				{
					text:'Сотрудник',
					width:'150',
				},
				{
					text:'Вид расчета',
					width:'150',
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
			style: 'position:absolute;left:6px;top:6px;width:599px;height:24px;',
			items:
			[
				{
					text:'&Удалить',
				},
				{
					text:'Сортировать по возрастанию',
				},
				{
					text:'&Переместить вниз',
				},
				{
					text:'Закончить редактирование',
				},
				'-',
				{
					text:'&Добавить',
				},
				{
					text:'Сортировать по убыванию',
				},
				{
					text:'&Изменить',
				},
				{
					text:'&Скопировать',
				},
				{
					text:'Заполнить по виду схемы мотивации',
				},
				'-',
				{
					text:'&Переместить вверх',
				},
			]
		},
					]
				},
			]
		},
	]
});