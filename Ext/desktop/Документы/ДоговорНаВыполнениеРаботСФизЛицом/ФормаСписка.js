Ext.define('Документы.ДоговорНаВыполнениеРаботСФизЛицом.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:676px;height:300px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Договоры на выполнение работ с физическими лицами',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:57px;width:660px;height:235px;',
			height: 235,width: 660,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Дата',
					width:'132',
				},
				{
					text:'Номер',
					width:'80',
				},
				{
					text:'Организация',
					width:'120',
				},
				{
					text:'Физическое лицо',
					width:'120',
				},
				{
					text:'Подразделение',
					width:'120',
				},
				{
					text:'Сумма за работу',
					width:'80',
				},
				{
					text:'Комментарий',
					width:'120',
				},
				{
					text:'Ответственный',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:676px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'',
				},
				{
					text:'Движения документа по регистрам',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие14',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Печать',
				},
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие2',
				},
				{
					text:'Структура подчиненности документа',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие8',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие9',
				},
				'-',
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие2',
				},
				'-',
				'-',
				'-',
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие12',
				},
				{
					text:'',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие10',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:660px;height:19px;',
			height: 19,width: 660,
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'checkbox',
			boxLabel: 'Организация:',
			style: 'position:absolute;left:0px;top:0px;width:87px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:92px;top:0px;width:220px;height:19px;',
		},
					]
				},
			]
		},
	]
});