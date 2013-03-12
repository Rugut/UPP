Ext.define('Справочники.НастройкиОбменаДанными.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:640px;height:388px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройки обмена данными',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:624px;height:347px;',
			height: 347,width: 624,
			columns:
			[
				{
					text:'',
					width:'24',
				},
				{
					text:'Код',
					width:'80',
				},
				{
					text:'Наименование',
					width:'120',
				},
				{
					text:'Узел',
					width:'120',
				},
				{
					text:'Загрузка',
					width:'110',
				},
				{
					text:'Отложенные движения документов',
					width:'110',
				},
				{
					text:'Наличие фоновой загрузки',
					width:'110',
				},
				{
					text:'Выгрузка',
					width:'100',
				},
				{
					text:'Комментарий',
					width:'144',
				},
				{
					text:'On line обмен',
					width:'70',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:640px;height:25px;',
			items:
			[
				{
					text:'Действие7',
				},
				{
					text:'Настройка обновления конфигурации',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие6',
				},
				{
					text:'Действие5',
				},
				{
					text:'',
				},
				'-',
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Выполнить обмен',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие9',
				},
				{
					text:'Монитор обменов',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие9',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Выполнить обмен',
				},
				'-',
				{
					text:'Действие2',
				},
				'-',
				{
					text:'Ввести на основании...',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие',
				},
				{
					text:'',
				},
				{
					text:'Ввести на основании...',
				},
				'-',
				{
					text:'Действие11',
				},
				{
					text:'Монитор обменов',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'',
				},
				{
					text:'Действие8',
				},
			]
		},
	]
});