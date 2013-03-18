Ext.define('Документы.ОперацияМеждународная.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:653px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: '',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'от:',
			style: 'position:absolute;left:180px;top:33px;width:16px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:57px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Сумма операции:',
			style: 'position:absolute;left:8px;top:81px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаОперации',
			style: 'position:absolute;left:98px;top:81px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:398px;width:88px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:398px;width:547px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Ответственный:',
			style: 'position:absolute;left:338px;top:57px;width:84px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:425px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:108px;width:637px;height:24px;',
			items:
			[
				{
					text:'',
				},
				{
					text:'Установить отбор и сортировку списка...',
				},
				{
					text:'Вывести список...',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:653px;height:25px;',
			items:
			[
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
			style: 'position:absolute;left:0px;top:425px;width:653px;height:25px;',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'Печать',
				},
				'-',
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
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:132px;width:637px;height:261px;',
			height: 261,width: 637,
			columns:
			[
				{
					text:'',
					width:'20',
				},
				{
					text:'Счет Дт',
					width:'56',
				},
				{
					text:'СубконтоДт1',
					width:'95',
				},
				{
					text:'СубконтоДт2',
					width:'95',
				},
				{
					text:'СубконтоДт3',
					width:'95',
				},
				{
					text:'Валюта',
					width:'41',
				},
				{
					text:'Вал. сумма',
					width:'93',
				},
				{
					text:'Количество',
					width:'98',
				},
				{
					text:'Счет Кт',
					width:'78',
				},
				{
					text:'СубконтоКт1',
					width:'98',
				},
				{
					text:'СубконтоКт2',
					width:'98',
				},
				{
					text:'СубконтоКт3',
					width:'98',
				},
				{
					text:'Валюта',
					width:'45',
				},
				{
					text:'Вал. сумма',
					width:'81',
				},
				{
					text:'Количество',
					width:'85',
				},
				{
					text:'Сумма',
					width:'63',
				},
				{
					text:'Содержание',
					width:'163',
				},
				{
					text:'№ж',
					width:'24',
				},
			]
		},
	]
});