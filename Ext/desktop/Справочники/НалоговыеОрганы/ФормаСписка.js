Ext.define('Справочники.НалоговыеОрганы.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:831px;height:401px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Налоговые органы',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:815px;height:360px;',
			height: 360,width: 815,
			columns:
			[
				{
					text:'Код',
					width:'104',
				},
				{
					text:'Наименование',
					width:'158',
				},
				{
					text:'E-mail для защищ. документооборота',
					width:'211',
				},
				{
					text:'Комментарий',
					width:'151',
				},
				{
					text:'Вид',
					width:'120',
				},
				{
					text:'E-mail',
					width:'120',
				},
				{
					text:'Учет нал.',
					width:'80',
				},
				{
					text:'Прием отч.',
					width:'80',
				},
				{
					text:'Вышестоящий НО',
					width:'164',
				},
				{
					text:'Полное наименование',
					width:'164',
				},
				{
					text:'ИНН',
					width:'80',
				},
				{
					text:'КПП',
					width:'72',
				},
				{
					text:'Адрес',
					width:'120',
				},
				{
					text:'Телефон',
					width:'120',
				},
				{
					text:'Адрес сайта',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:831px;height:25px;',
			items:
			[
				{
					text:'Действие8',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие6',
				},
				{
					text:'Загрузить классификатор',
				},
				'-',
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие10',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие1',
				},
				'-',
				'-',
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				{
					text:'Действие11',
				},
				{
					text:'Виды налоговых органов',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие9',
				},
				'-',
				'-',
				{
					text:'Действие8',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие3',
				},
				{
					text:'Просмотр в виде дерева',
				},
			]
		},
	]
});